import { useState } from 'react'
import { useRouter } from 'next/router'
import { getUsers } from '@/utils/actions'
import bcrypt from 'bcryptjs'
import { useContext } from 'react'
import Context from '@/context/context'

const Login = ({ users }) => {
    const router = useRouter()

    const [loginUser, setLoginUser] = useState({ email: '', password: '' })
    const [currentUser, setCurrentUser] = useState({})

    const handleChange = (e) => {
        const loggedUser = { ...loginUser }
        loggedUser[e.target.name] = e.target.value
        setLoginUser(loggedUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users)
        users.forEach(async (user) => {
            if ((loginUser.email === user.email) && (await bcrypt.compare(loginUser.password, user.password))) {
                setCurrentUser(user)
                router.push('/')
            } else {
                console.log(`Email and password dont match!`)
            }

        });

    }

    return (
        <div className="signup__page">
            <div className="container signup__container">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="password" required placeholder="Password" onChange={handleChange} />
                    </div>
                    <div>
                        <button className='signup__button' type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>);
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