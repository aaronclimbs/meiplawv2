import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="flex items-center p-2 border-b">
      <Link href="/">
        <a className="p-2 mr-4 hidden md:inline-flex flex-shrink">
          <Image
            src="/assets/ME_PRIMARY_WEB [2913x609].jpg"
            className=""
            width={426}
            height={89.1}
          />
        </a>
      </Link>
      <Link href="/">
        <a className="p-2 mr-4 inline-flex md:hidden">
          <Image
            src="/assets/ME_ELEMENT_WEB [521x562].jpg"
            width={89.1}
            height={89.1}
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
          !isActive ? 'hidden' : ''
        } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="flex flex-col items-start lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <Link href="/team">
            <a className="text-2xl uppercase justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
              Team
            </a>
          </Link>
          <Link href="/about">
            <a className="text-2xl uppercase justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
              About Us
            </a>
          </Link>
          <Link href="/cases">
            <a className="text-2xl uppercase justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
              Cases
            </a>
          </Link>
          <Link href="/news">
            <a className="text-2xl uppercase justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
              News
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-2xl uppercase justify-center w-full px-3 py-2 font-bold text-blue-600 rounded lg:inline-flex lg:w-auto hover:text-white hover:bg-blue-600 n-600">
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
