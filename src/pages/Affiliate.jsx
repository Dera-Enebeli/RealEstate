import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaPencilAlt,
  FaCalendarAlt,
  FaAddressCard,
  FaFileUpload,
  FaBriefcase,
  FaGraduationCap
} from "react-icons/fa";

export default function AffiliateProgram() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#FED7AA] to-[#FED7AA] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Want to work with us or become an agent?</h1>
        <p className="text-lg">Join our affiliate program and be part of our ever-growing team</p>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
            <FaEnvelope className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Email Address</h3>
            <p className="text-gray-600 mt-2">info@12thcityrealestate.ng</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
            <FaPhone className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Phone Number</h3>
            <p className="text-gray-600 mt-2">+234 9164768748</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
            <FaMapMarkerAlt className="text-4xl text-[#FED7AA] mb-4" />
            <h3 className="text-xl font-bold">Office Address</h3>
            <p className="text-gray-600 mt-2">
              Unit III, Plot 204 Pius Anyim Street, Off Olusegun Obasanjo Way,
              Wuye, Abuja FCT
            </p>
          </div>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-md max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Fill the form</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Enter your address</label>
                <div className="relative">
                  <input
                    type="text"
                    className="border border-gray-300 p-3 rounded-md w-full"
                    placeholder="Enter your address"
                  />
                  <span className="absolute right-3 top-3 text-[#FED7AA]">
                    <FaAddressCard />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Date of birth</label>
                <div className="relative">
                  <input
                    type="date"
                    className="border border-gray-300 p-3 rounded-md w-full"
                    placeholder="Date of birth"
                  />
                  <span className="absolute right-3 top-3 text-[#FED7AA]">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Select Qualification</label>
                <div className="relative">
                  <select className="border border-gray-300 p-3 rounded-md w-full">
                    <option>Select Qualification</option>
                    <option>High School</option>
                    <option>Associate Degree</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>Doctorate</option>
                  </select>
                  <span className="absolute right-3 top-3 text-[#FED7AA]">
                    <FaGraduationCap />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Select Experience</label>
                <div className="relative">
                  <select className="border border-gray-300 p-3 rounded-md w-full">
                    <option>Select Experience</option>
                    <option>0-1 years</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                  <span className="absolute right-3 top-3 text-[#FED7AA]">
                    <FaBriefcase />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Upload your CV (5mb max size)</label>
                <div className="relative">
                  <input
                    type="file"
                    className="border border-gray-300 p-3 rounded-md w-full"
                  />
                  <span className="absolute right-3 top-3 text-[#FED7AA]">
                    <FaFileUpload />
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
                className="bg-[#FED7AA] text-white px-8 py-4 rounded-md font-bold hover:bg-[#FED7AA]-700">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
