import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import Header from "./header";

function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                {/* DESCRIPTION FOR SEO */}
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Header />
            <hr />
            {props.children}
            <hr />
            <Footer />
        </>
    );
}

export default Layout;