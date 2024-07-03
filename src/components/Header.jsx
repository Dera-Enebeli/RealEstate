import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { navLink } from "../data/navLink";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Header() {
  const [navShow, setNavShow] = useState(false);

  return (
    <header className="sticky top-0 bg-lightblue z-50 w-full shadow-md">
      <div className="relative px-4 flex justify-between items-center lg:px-[10rem]">
        <h1 className="text-gray-600 font-semibold text-lg">
          <Link to="/">
            <img
              src="/best_logo.png"
              alt="Logo"
              className="w-[10rem] md:w-[15rem] shrink-0"
            />
          </Link>
        </h1>

        {/* Sidebar Navigation for Small Screens */}
        <nav
          className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
            navShow ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}>
          <div className="flex justify-between items-center p-4 border-b">
            <img
              src="/best_logo.png"
              alt="Logo"
              className="w-[8rem] sm:w-[10rem]"
            />
            <HiOutlineX
              className="text-gray-600 font-bold text-xl cursor-pointer"
              onClick={() => setNavShow(!navShow)}
            />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {navLink.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="text-gray-900 text-lg font-semibold hover:bg-blue-300 hover:text-orange-600 px-4 py-2 rounded transition"
                onClick={() => setNavShow(false)}>
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 p-4 border-t mt-auto">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <BiLogoFacebook size={20} className="text-orange-200" />{" "}
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <BiLogoInstagram size={20} className="text-orange-200" />{" "}
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <BiLogoTwitter size={20} className="text-orange-200" />{" "}
            </a>
          </div>
        </nav>

        {/* Horizontal Navigation for Large Screens */}
        <nav className="hidden md:flex md:flex-row md:justify-end md:space-x-4 lg:space-x-8 w-full">
          {navLink.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              className="text-gray-900 text-lg font-semibold hover:bg-blue-300 hover:text-orange-600 px-4 py-2 rounded transition">
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Burger Icon for Small Screens */}
        <div
          onClick={() => setNavShow(!navShow)}
          className="flex shadow-lg p-4 cursor-pointer md:hidden">
          <HiOutlineMenu className="text-gray-600 font-bold text-lg" />
        </div>
      </div>
    </header>
  );
}
