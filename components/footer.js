import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
    weight: ["700"],
    subsets: ["latin"],
});
const Footer = () => {
    return (
        <footer>
            <div className="footer__logo">
                <div className="logo">
                    <h1 className={caveat.className}>Done Undone</h1>

                </div>
            </div>
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
