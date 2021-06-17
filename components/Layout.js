import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Maddox Edwards PLLC</title>
                <link rel="icon" href="/favicon.jpg" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <footer className="">
                <p>&#169; 2015-{new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Layout;
