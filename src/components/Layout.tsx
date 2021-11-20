import Navbar from "./Navbar";
import Head from "next/head";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
    </div>
  );
};

export default Layout;
