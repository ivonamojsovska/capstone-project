import { Caveat } from "next/font/google";

const caveat = Caveat({
    weight: ["700"],
    subsets: ["latin"],
});

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className={caveat.className}>What's up, Ivona?</h1>
            </div>
        </header>
    );
}

export default Header;

