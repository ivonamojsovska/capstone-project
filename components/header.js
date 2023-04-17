import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
    weight: ["700"],
    subsets: ["latin"],
});

function Header() {
    return (
        <header className="container">
            <div className="header">
                <div className="header__text">
                    <h1 className={caveat.className}>Hey, there...!</h1>
                </div>
                <div className="sign__out-btn">
                    <Link href='/login'><button className="sign-form__button">Log Out</button></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

