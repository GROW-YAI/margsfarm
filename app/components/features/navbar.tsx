import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../src/assets/logo/agric-logo.svg";

const NAVLINKS = [
  { id: "#home", name: "Home" },
  { id: "#about", name: "About" },
  { id: "#services", name: "Services" },
  { id: "#portfolio", name: "Portfolio" },
  { id: "#contact", name: "Contact" },
];

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-4 bg-transparent">
      <Link href="/" className="w-28 h-28 sm:max-w-full sm:max-h-11">
        <Image
          src={Logo}
          alt="logo"
          width={112}
          height={44}
          className="w-full h-auto"
          priority
        />
      </Link>
      
      <nav>
        {/* MOBILE VIEW */}
        {/* HAMBURGER */}
        <div
          className="text-white sm:hidden cursor-pointer"
          onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        {/* DARK MODAL */}
        <div
          onClick={() => {
            setShowMobileNav(false);
          }}
          className={`${
            showMobileNav ? "top-0 right-0" : "-right-[100%] -top-0"
          } fixed w-full h-screen bg-black/85 duration-300 z-50 sm:hidden`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${
              showMobileNav
                ? "top-24 right-4 opacity-100"
                : "top-24 -right-full opacity-0"
            } w-[80%] max-w-sm flex flex-col gap-4 p-6 rounded-xl bg-white absolute duration-300 transition-all`}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowMobileNav(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            {/* MOBILE LINKS */}
            <div className="mt-8">
              {NAVLINKS.map((link, index) => (
                <div key={index} className="flex items-center justify-center py-4 border-b border-gray-100">
                  <Link
                    href={link.id}
                    className="text-gray-800 text-lg font-medium hover:text-[#eddd5e] transition-colors"
                    onClick={() => setShowMobileNav(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* DESKTOP VIEW */}
        <ul className="hidden sm:flex sm:items-center sm:gap-8">
          {NAVLINKS.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.id}
                  className="text-white text-sm font-medium hover:text-[#eddd5e] transition-colors px-2 py-1"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;