import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar container">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link href="/" className="navbar__link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="navbar__link">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;