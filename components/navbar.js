"use client";
import { NAV_LINKS } from "./navLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        {/* <Image src="/logo.svg" alt="logo" width={74} height={29} /> */}
        <span className="ml-8 text-5xl text-white">Demo</span>
      </Link>

      <ul
        className={`lg:flex items-center justify-center flex-grow gap-12 text-center ${
          menuOpen ? "flex" : "flex"
        } md:flex`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex text-right ">
        <button type="button" className="bg-white text-black">
          Contact
        </button>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className=" cursor-pointer lg:hidden hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
