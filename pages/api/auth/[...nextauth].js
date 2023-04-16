import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connect } from "@/utils/connection";
import User from "@/utils/mongodb";

import { compare } from 'bcrypt'



export default NextAuth(
    {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                async autorize(credentials, req) {

                    connect().catch(error => { error: "Connection Failed..." })

                    const result = await User.findOne({ email: credentials.email })
                    console.log(result)
                    if (!result) {
                        throw new Error("No user found. Please Sign up.")
                    }

                    const checkPassword = await compare(credentials.password, result.password)


                    if (!checkPassword || result.email !== credentials.email) {
                        throw new Error("Email or password doesnt match")
                    }

                }
            })
        ]

    })