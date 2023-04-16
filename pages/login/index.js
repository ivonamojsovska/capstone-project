import { useState } from 'react'
import { useRouter } from 'next/router'
import { getUsers } from '@/utils/actions'
import bcrypt from 'bcryptjs'
import Link from 'next/link'
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi'
import { signIn, signOut } from "next-auth/react"




const Login = ({ users }) => {
    const router = useRouter()
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const [currentUser, setCurrentUser] = useState(null)

    const [show, setShow] = useState(false)



    const handleChange = (e) => {
        const loggedUser = { ...loginUser }
        loggedUser[e.target.name] = e.target.value
        setLoginUser(loggedUser)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const status = await signIn('credentials', {
            redirect: false,
            email: loginUser.email,
            password: loginUser.password,
            callbackUrl: '/login',
        })

        console.log(status)
        if (status.ok) router.push('/')

        // users.forEach(async (user) => {
        //     if ((loginUser.email === user.email) && (await bcrypt.compare(loginUser.password, user.password))) {
        //         setCurrentUser(user)
        //     } else {
        //         console.log(`Email and password dont match!`)
        //     }
        // });

    }

    return (
        <div className="signup__page">
            <div className="container signup__container">
                <h3>Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <div className='sign-form__input'>
                        <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
                        <span>
                            <HiAtSymbol />
                        </span>
                    </div>
                    <div className='sign-form__input'>
                        <input type={`${show ? "text" : "password"}`} name="password" required placeholder="Password" onChange={handleChange} />
                        <span onClick={() => setShow(!show)
                        }>
                            <HiFingerPrint />
                        </span>
                    </div>
                    <div className=''>
                        <button className='sign-form__button' type="submit">Login</button>
                    </div>
                </form>
                <div>
                    <p>Dont have an account yet? <Link href='/register'>Sign Up</Link></p>
                </div>

            </div>
        </div>

    );
}


export async function getServerSideProps(ctx) {
    const users = JSON.parse(JSON.stringify(await getUsers()));
    return {
        props: {
            users
        },
    };
}

export default Login;