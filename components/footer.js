import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li>
                    <Link href="/" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="link">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/" className="link">
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="footer__socials">
                <Link href="htpps://facebook.com" className="link">
                    <FaFacebookF />
                </Link>
                <Link href="htpps://instagram.com" className="link">
                    <FiInstagram />
                </Link>
                <Link href="htpps://twitter.com" className="link">
                    <FaTwitter />
                </Link>
            </div>
            <div className="footer__copyright">
                <small>&copy; All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
