import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

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
              <h to="">No 817 Edmund Medani Crescent Mabushi, Abuja, FCT.</h>
            </li>
            <li className="mb-2">
              <Link to="" className="">
                +234 (0) 8136271063{" "}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/shop" className="">
                onyidorisluxuryapartments@gmail.com
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <BiLogoFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/onyidoris_luxury_apartments?igsh=MTNxMnhucWE1dGd2MA=="
              target="_blank"
              className="hover:text-gray-400">
              <BiLogoInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <BiLogoTwitter size={24} />
            </a>

            {/* <div className="mt-10 text-white flex gap-10"> */}
            <a
              href="https://wa.me/2348136271063" // replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-400">
              <BiLogoWhatsapp
                size={24}
                // className="text-orange-200 hover:text-green-500 transition-colors duration-300"
              />
            </a>

            <a
              href="mailto:onyidorisluxuryapartments@gmail.com" // replace with your email
              className="cursor-pointer hover:text-gray-400">
              <SiGmail
                size={24}
                // className="hover:text-red-400 transition-colors duration-300"
              />
            </a>
            {/* </div> */}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="/treatments" className="hover:underline">
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

          <Link
            to="/contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md transition duration-300 hover:bg-white hover:text-green-900">
            MAKE AN APPOINTMENT
          </Link>
        </div>
      </div>
    </footer>
  );
}
