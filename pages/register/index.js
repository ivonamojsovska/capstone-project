import { useState } from 'react'
import { useRouter } from 'next/router'


const Register = () => {
    const router = useRouter()
    const [user, setUser] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }

    const handleSubmit = async (e) => {
        await fetch('/api/auth/signup', {
            method: 'post',
            headers: { "Content-Type": "application/json" }
            , body: JSON.stringify(user)
        })
        e.target.reset();

        router.push('/')
    }

    return (
        <div className="signup__page">
            <div className="container signup__container">
                <h3>Sign in</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="fullName" required placeholder="Full Name" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="password" required placeholder="Password" onChange={handleChange} />
                    </div>
                    <div>
                        <button className='signup__button' type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>);
}



export default Register;