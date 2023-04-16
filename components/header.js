import { Caveat } from "next/font/google";
import Login from "@/pages/login";
import { useContext } from "react";
import { CurrentUser } from "@/context/context";

const caveat = Caveat({
    weight: ["700"],
    subsets: ["latin"],
});

function Header({ data }) {
    return (
        <header className="header">
            <div className="container">
                <h1 className={caveat.className}>What's up, {data.fullName}</h1>
            </div>
        </header>
    );
}

export default Header;

