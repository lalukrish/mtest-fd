"use client";
import { NAV_LINKS } from "./navLinks";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5">
      <Link href="/">
        <span className="ml-6 text-5xl text-white">Demo</span>
      </Link>

      <ul
        className={`hidden lg:flex items-center justify-center flex-grow gap-12 text-center ${
          menuOpen ? "hidden" : "flex"
        }`}
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

      <div
        className={`hidden lg:flex justify-end items-end ${
          menuOpen ? "hidden" : "flex"
        }`}
      >
        <button type="button" className="bg-white text-black px-4 py-2 rounded">
          Contact
        </button>
      </div>

      <button
        type="button"
        className="lg:hidden ml-auto"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-white cursor-pointer"
          size="lg"
        />
      </button>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#002A3A] transition-transform duration-300 transform lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          className="text-white absolute ml-2"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="flex flex-col items-start p-4 h-full">
          <ul className="mt-4 flex-grow">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="mb-4">
                <Link
                  href={link.href}
                  className="text-white cursor-pointer transition-all hover:font-bold"
                  onClick={toggleSidebar}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
