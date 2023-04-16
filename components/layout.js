import Head from "next/head";


function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                {/* DESCRIPTION FOR SEO */}
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="app">
                {props.children}

            </div>

        </>
    );
}

export default Layout;