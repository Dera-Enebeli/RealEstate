import React, { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { navLink } from "../data/navLink";

<title>About us</title>

export default function Header() {
  const [navShow, setNavShow] = useState(false);

  return (
    <header className="relative px-4 flex justify-between items-center bg-lightblue lg:sticky w-full lg:top-0 lg:px-[10rem]  z-50">
     
        <h1 className="text-gray-600 font-semibold text-lg">
          <Link to="/">
            <img src="/best_logo.png" alt="" className="w-[15rem] shrink-0"/>
          </Link>
        </h1>
        
      <nav
        className={`flex flex-col md:flex-row md:justify-end absolute md:static lg:static ${
          navShow ? "left-0" : "left-full"
        } top-full w-full bg-custom-blue md:bg-transparent z-50`}>
        {navLink.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className="text-gray-900 sm:text-sm px-2 md:text-sm md:font-semibold static z-50
        hover:bg-blue-300 hover:text-orange-600 md:border-transparent md:hover:border-blue-300 md:hover:bg-transparent md:hover:text-orange-600 lg:px-4 lg:text-lg">
            {link.text}
          </Link>
        ))}
      </nav>
      
      <div
        onClick={() => setNavShow(!navShow)}
        className="flex shadow-lg p-4 cursor-pointer md:hidden">
        <HiMiniBars2 className="text-gray-600 font-bold text-lg"/>
      </div>
       
    </header>
  );
}
