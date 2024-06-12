import React from "react";
import { HiHome } from "react-icons/hi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPencilAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
          <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">Contact Us</h1>
          <div className="flex items-center">
            <HiHome size={25} className="mr-2 text-[#FED7AA]" />
            <p className="inline-block text-gray-700 font-semibold">
              Home &gt; <span className="font-bold">Contact Us</span>
            </p>
          </div>
        </div>
      </section>

      <div className="p-8 bg-white shadow-lg max-w-7xl mx-auto mt-10 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center p-6 border rounded-md">
            <FaEnvelope className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Email Address</h3>
            <p className="text-gray-600 mt-2">info@12thcityrealestate.ng</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md">
            <FaPhone className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Phone Number</h3>
            <p className="text-gray-600 mt-2">+234 9164768748</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md">
            <FaMapMarkerAlt className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Office Address</h3>
            <p className="text-gray-600 mt-2">
              Unit III, Plot 204 Pius Anyim Street, Off Olusegun Obasanjo Way,
              Wuye, Abuja FCT
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Get A Quote</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter your name</label>
              <div className="relative">
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter your name"
                />
                <span className="absolute right-3 top-3 text-[#FED7AA]">
                  <FaUser />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter email address</label>
              <div className="relative">
                <input
                  type="email"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter email address"
                />
                <span className="absolute right-3 top-3 text-[#FED7AA]">
                  <FaEnvelope />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter phone number</label>
              <div className="relative">
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter phone number"
                />
                <span className="absolute right-3 top-3 text-[#FED7AA]">
                  <FaPhone />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 mb-2">Enter message</label>
            <div className="relative">
              <textarea
                className="border border-gray-300 p-3 rounded-md w-full h-32"
                placeholder="Enter message"></textarea>
              <span className="absolute right-3 top-3 text-[#FED7AA]">
                <FaPencilAlt />
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FED7AA] text-white px-8 py-4 rounded-md font-bold">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
