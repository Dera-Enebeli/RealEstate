import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-mainBlue text-white py-16 mt-[10rem]">
      <div className="hidden md:flex justify-center">
        <img src="./ODLA white.png" alt="" className="w-[27rem] h-[15rem]" />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        <div className="">
          <img src="./ODLA white.png" alt="" />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">
              <Link to="" className="hover:underline">
                Unit III, Plot 204 Pius Anyim Street, Off Olusegun Obasanjo Way,
                Wuye, Abuja FCT
              </Link>
            </li>
            <li className="mb-2">
              <Link to="" className="hover:underline">
                +234 9164768748
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shop" className="hover:underline">
                deraslogic@gmail.com
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <BiLogoFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <BiLogoInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <BiLogoTwitter size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="/About" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/pricing" className="hover:underline">
                Events
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shop" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">At CityScape Capital</h3>
          <p className="mb-6">We Ensure you get the best housing posible.</p>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md transition duration-300 hover:bg-white hover:text-green-900">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </footer>
  );
}
