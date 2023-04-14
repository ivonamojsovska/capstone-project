


const SignupForm = () => {

    const userArr = async () => {
        const users = await fetch('http://localhost:3000/api/auth/signup')
        const data = await users.json()
        return await data
    }


    return (
        <div className="signup__page">
            <div className="container signup__container">
                <h3>Sign in</h3>
                <form>
                    <div>
                        <input type="email" name="email" required placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" name="password" required placeholder="Password" />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>);
}

export default SignupForm;