import React, { useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { BiRuler, BiRightArrowAlt } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./slideNavigation";

const properties = [
  {
    id: 1,
    title: "Unique Villa With Private Beach",
    location: "Banana Island Lagos",
    image: "/apt1.jpg",
    description:
      "Lorem ipsum dolor sit amet, ad aliquip incididunt deserunt ut dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bed: 3,
    size: "10x10 m",
    area: "1600 m",
    price: "₦2,490,000",
  },
  {
    id: 2,
    title: "Gorgeous Country House",
    location: "Lekki Phase 1",
    image: "/apt2.jpg",
    description:
      "Ut quis dolor tempor venum, aute eu nisl bibendum diam nonummy eu. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bed: 3,
    size: "10x10 m",
    area: "1600 m",
    price: "₦3,300 / per Month",
  },
  {
    id: 3,
    title: "Majestic Residence in Victoria Island",
    location: "Victoria Island",
    image: "/main_apt1.jpg",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bed: 3,
    size: "10x10 m",
    area: "1600 m",
    price: "₦468,000",
  },
];

const Project = () => {
  useEffect(() => {}, []);

  return (
       <div>
      {/* Navigation Bar */}
      <div className="bg-white py-4 shadow-lg flex flex-wrap rounded-full mx-6 lg:mx-[10rem] mt-4 mb-8 border border-orange-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center text-center">
            <div className="nav-links flex flex-wrap justify-center space-x-6" id="navLinks">
              <Link
                to="#buy"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Buy
              </Link>
              <Link
                to="#rent"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Rent
              </Link>
              <Link
                to="#sell"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Sell
              </Link>
              <Link
                to="#airbnb"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Airbnb
              </Link>
              <Link
                to="#shortlets"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Shortlets
              </Link>
              <Link
                to="#commercial"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Commercial
              </Link>
              <Link
                to="#vacation"
                className="text-gray-700 hover:bg-orange-200 hover:text-white py-2 px-4 rounded-full transition-colors duration-300">
                Vacation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">
          Latest Properties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-md">
              <img
                src={property.image}
                alt={property.title}
                className="h-[17rem] w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg">{property.title}</h2>
                <div className="flex items-center my-2">
                  <HiLocationMarker className="text-newBlue" />
                  <h3 className="pl-2">{property.location}</h3>
                </div>
                <p className="text-gray-600">{property.description}</p>
                <div className="flex justify-between gap-6 my-2">
                  <div className="flex items-center">
                    <IoBedOutline className="text-newBlue" />
                    <span className="pl-2">{property.bed} Bed</span>
                  </div>
                  <div className="flex items-center">
                    <BiRuler className="text-newBlue" />
                    <span className="pl-2">{property.size}</span>
                  </div>
                  <div className="flex items-center">
                    <GoGraph className="text-newBlue" />
                    <span className="pl-2">{property.area}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button className="bg-newBlue text-white px-4 py-2 rounded-md flex items-center">
                    View Properties <BiRightArrowAlt className="ml-2" />
                  </button>
                  <span className="font-bold">{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
