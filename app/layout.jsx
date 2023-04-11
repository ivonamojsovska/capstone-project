import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Done Undone",
  description: "Orginize your day and use the time wisely",
  keywords: "to-do app, organisation skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
