import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <nav className="flex flex-wrap items-center p-2 border-b">
            <Link href="/">
                <a className="inline-flex items-center p-2 mr-4 ">
                    <Image
                        src="/MaddoxEdwards_PRIMARY.svg"
                        width={284}
                        height={59.4}
                    />
                </a>
            </Link>
            <button
                onClick={handleClick}
                className="inline-flex p-3 ml-auto rounded outline-none hover:text-white hover:bg-blue-600 lg:hidden n-600"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={`${
                    active ? "hidden" : ""
                } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
                    <Link href="/team">
                        <a className="items-center justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600 ">
                            Meet our team
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="items-center justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
                            About Us
                        </a>
                    </Link>
                    <Link href="/cases">
                        <a className="items-center justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
                            Cases
                        </a>
                    </Link>
                    <Link href="/news">
                        <a className="items-center justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
                            News
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="items-center justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
                            Contact Us
                        </a>
                    </Link>
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Navbar;
