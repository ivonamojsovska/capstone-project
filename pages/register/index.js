import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HiOutlineUser, HiAtSymbol, HiFingerPrint } from 'react-icons/hi'



const Register = () => {
    const router = useRouter()
    const [user, setUser] = useState({ email: '', password: '' })
    const [show, setShow] = useState(false)

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
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className='sign-form__input'>
                        <input type="text" name="fullName" required placeholder="Full Name" onChange={handleChange} />
                        <span>
                            <HiOutlineUser />
                        </span>
                    </div>
                    <div className='sign-form__input'>
                        <input type="email" name="email" required placeholder="Email" onChange={handleChange} />
                        <span>
                            <HiAtSymbol />
                        </span>
                    </div>
                    <div className='sign-form__input'>
                        <input type={`${show ? "text" : "password"}`} name="password" required placeholder="Password" onChange={handleChange} />
                        <span onClick={() => { setShow(!show) }}>
                            <HiFingerPrint />
                        </span>
                    </div>

                    <div>
                        <button className='sign-form__button' type="submit">Sign In</button>
                    </div>
                </form>
                <div>
                    <p>Have an account?<Link href='/login'>Login</Link></p>
                </div>
            </div>
        </div>);
}



export default Register;