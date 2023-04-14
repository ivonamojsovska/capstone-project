import { NextApiRequest, NextApiResponse } from "next"
import { connect } from '@/utils/connection'
//import { User } from '@/utils/mongodb.js'
import { IUser } from "@/types"
import { mongoose, Model, Models } from "mongoose"
import { hash } from "bcryptjs"
import User from "@/utils/mongodb"
import { getUsers } from "@/utils/actions"

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
    connect().catch(err => res.json(err))


    if (req.method === "POST") {

        if (!req.body) return res.status(400).json({ error: "Data is missing" })

        const { fullName, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(409).json({ error: "User Already Exists." })
        } else {
            if (password.length < 6)
                return res.status(409).json({ error: "Password should be longer than 6 characters" })


            const hashedPassword = await hash(password, 12)

            try {
                const data = await User.create({
                    fullName,
                    email,
                    password: hashedPassword
                })

                const user = {
                    email: data.email,
                    fullName: data.fullName,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    user
                })
            } catch (error) {
                if (error instanceof mongoose.Error.ValidationError) {
                    for (let field in error.errors) {
                        const msg = error.errors[field].message
                        return res.status(409).json({ error: msg })
                    }
                } else {
                    return res.status(500).json({ error: "Internal Server Error" })
                }
            }
        }
    }

    if (req.method === "GET") res.json(await getUsers())
}


export default handler
