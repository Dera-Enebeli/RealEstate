import React, { useState } from "react";
import {
  BiRightArrowAlt,
  BiRuler,
} from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import Cards from "../data/Cards";
import { BiLogoWhatsapp } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Body() {
  const homes = [
    { id: 1, image: "/apt1.jpg", location: "Asokoro - Abuja", beds: 4, size: "10x10 m", area: "1600 m", price: "₦100,000" },
    { id: 2, image: "/apt2.jpg", location: "Wuse 2 - Abuja", beds: 4, size: "10x10 m", area: "1600 m", price: "₦100,000" },
    { id: 3, image: "main_apt4.jpg", location: "Maitama - Abuja", beds: 4, size: "10x10 m", area: "1600 m", price: "₦100,000" },
  ];

  return (
    <div>
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-8 sm:px-16 relative">
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { label: "Imports", value: "12,460" },
            { label: "Selling Rates", value: "10,700" },
            { label: "Market Settlement", value: "8,590" },
            { label: "Works", value: "9,567" },
          ].map((stat, i) => (
            <div
              key={i}
              className="w-72 h-40 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-extrabold text-newBlue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-lg font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Redesigned Popular Homes Section */}
      <section className="bg-newBlue py-16 mb-20">
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left mb-12">
          <span className="text-orange-400 uppercase text-sm tracking-widest">
            Popular Homes
          </span>
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
            Our Popular Homes
          </h2>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((home) => (
            <div
              key={home.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={home.image}
                  alt={home.location}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-lg font-semibold text-newBlue mb-3">
                  <HiLocationMarker className="mr-2 text-2xl text-mainBlue" />
                  {home.location}
                </div>
                <div className="flex justify-between text-gray-600 mb-6">
                  <div className="flex items-center">
                    <IoBedOutline className="mr-1 text-newBlue" />{home.beds} Bed
                  </div>
                  <div className="flex items-center">
                    <BiRuler className="mr-1 text-newBlue" />{home.size}
                  </div>
                  <div className="flex items-center">
                    <BiRightArrowAlt className="mr-1 text-newBlue" />{home.area}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link to="/project">
                    <button className="flex items-center bg-mainBlue text-white px-4 py-2 rounded-md hover:bg-orange-300 transition-colors duration-300">
                      View Properties
                      <BiRightArrowAlt className="ml-2 text-lg" />
                    </button>
                  </Link>
                  <span className="text-newBlue font-bold text-lg">{home.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="flex text-gray-900 font-semibold justify-center py-12">
        <div>
          <p className="text-center text-orange-200 pb-4">Our Services</p>
          <p className="text-2xl md:text-5xl text-gray-900 font-bold">Our Main Focus</p>
        </div>
      </section>

      {/* Cards Data Section */}
      <Cards />

      {/* Luxury Living Section */}
      <section className="flex flex-col bg-slate-100 px-4 sm:px-10 md:py-10 md:px-20 gap-6 items-center lg:flex-row">
        <div className="flex-none">
          <img
            src="/main_apt8.jpg"
            alt="Apartment"
            className="h-64 mt-5 sm:h-80 md:h-[40rem] w-full lg:w-[30rem] shrink-0 shadow-lg object-cover rounded-md border-4 border-white"
          />
        </div>

        <div className="flex-grow p-4 sm:p-8 md:p-12 lg:p-16">
          <p className="text-lg font-semibold pb-3">Luxury Living</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Where Elegance Meets Comfort
          </h1>
          <p className="text-gray-700 pb-6">
            At Onyidoris Luxury Apartments & Suites, your comfort is our top
            priority. As one of Africa’s most esteemed names in real estate
            development, we take pride in crafting exceptional Class A
            residential and commercial properties that redefine luxury living.
            More than just homes, we create timeless legacies—designed for
            sophistication, built for generations.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <ul className="list-disc pl-5">
              <li className="p-1">Locatio conductio rei.</li>
              <li className="p-1">Praedium urbanum.</li>
            </ul>
            <ul className="list-disc pl-5">
              <li className="p-1">Usufructus.</li>
              <li className="p-1">Emptio-Venditio.</li>
            </ul>
          </div>

          <div className="bg-orange-100 mt-6 p-4 border-l-4 border-newBlue">
            <p>
              "The true magic of home lies in the journey—it calls you to
              explore the world, but its greatest power is in drawing you back,
              where your heart finds its deepest comfort."
            </p>
          </div>

          <Link to="/project">
            <button className="bg-newBlue rounded-md text-white p-4 mt-6">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="relative">
        <img src="/new_map2.jpg" alt="Map" className="w-full h-[18rem] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <p className="pb-6 text-orange-200">// Have any enquiries? //</p>
          <h1 className="text-xl md:text-6xl font-bold text-white">
            +234 813-627-1063
          </h1>
          <div className="mt-10 text-white flex gap-10">
            <a
              href="https://wa.me/2348136271063"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <BiLogoWhatsapp
                size={50}
                className="text-orange-200 hover:text-green-500 transition-colors duration-300"
              />
            </a>

            <a
              href="mailto:onyidorisluxuryapartments@gmail.com"
              className="cursor-pointer"
            >
              <SiGmail
                size={50}
                className="text-orange-200 hover:text-red-400 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="text-center flex justify-center flex-col items-center mt-20 md:mt-20 mb-20">
        <div className="text-orange-400 mb-2">From our Blog</div>
        <div className="text-2xl md:text-5xl font-bold mb-4">
          Latest News & Events
        </div>
        <p className="text-red-600 text-lg">No News or Events yet....</p>
      </section>
    </div>
  );
}