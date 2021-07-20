import Navbar from './Navbar';
import Head from 'next/head';
import Hero from './Hero';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-meipBgGray">
      <Head>
        <title>Maddox Edwards PLLC</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Navbar />
      <Hero>{children}</Hero>
      <Footer className="">
        <p>&#169; 2015-{new Date().getFullYear()}</p>
      </Footer>
    </div>
  );
};

export default Layout;
