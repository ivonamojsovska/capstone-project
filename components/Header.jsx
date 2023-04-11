import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ["700"],
  subsets: ["latin"],
});

function Header() {
  return (
    <header className="header">
      <div className="container center">
        <div className="logo">
          <h1 className={caveat.className}>Done Undone</h1>
          <p className="header__paragraph">
            Orginize your day and spend the time wisely
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
