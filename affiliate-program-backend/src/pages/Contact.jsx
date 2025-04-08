import React, { useState } from "react";
import Swal from "sweetalert2";
import { HiHome } from "react-icons/hi";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaPencilAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Contact() {
  const navigate = useNavigate(); // Initialize navigate function

  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const data = new FormData();

    console.log("Form submit triggered");

    // Append form data
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    console.log("Sending data:", formData); // Debugging: log the data being sent
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch("http://localhost:5000/api/forms/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set JSON Content-Type
            },
            body: JSON.stringify(formData), // Send formData as JSON
          });
      
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error: ${response.status} - ${errorMessage}`);
          }
      
          const result = await response.json();
          console.log(result);
      
          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Message sent successfully!",
          }).then(() => navigate("/"));
      
          // Clear the form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } catch (error) {
          console.error("Error:", error);
      
          // Show error alert
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Error sending message. Please try again.",
          });
        }
      };
    }

  return (
    <>
      <section>
        <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
          <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">
            Contact Us
          </h1>
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
            <FaEnvelope className="text-4xl text-mainBlue mb-4" />
            <h3 className="text-xl font-bold">Email Address</h3>
            <p className="text-gray-600 mt-2">DerasLogic@gmail.com</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md">
            <FaPhone className="text-4xl text-mainBlue mb-4" />
            <h3 className="text-xl font-bold">Phone Number</h3>
            <p className="text-gray-600 mt-2">+234 9115434458</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-md">
            <FaMapMarkerAlt className="text-4xl text-mainBlue mb-4" />
            <h3 className="text-xl font-bold">Office Address</h3>
            <p className="text-gray-600 mt-2">
              Unit III, Plot 204 Pius Anyim Street, Off Olusegun Obasanjo Way,
              Wuye, Abuja FCT
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Get A Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter your name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter your name"
                  required
                />
                <span className="absolute right-3 top-3 text-mainBlue">
                  <FaUser />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter email address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter email address"
                  required
                />
                <span className="absolute right-3 top-3 text-mainBlue">
                  <FaEnvelope />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2">Enter phone number</label>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-md w-full"
                  placeholder="Enter phone number"
                  required
                />
                <span className="absolute right-3 top-3 text-mainBlue">
                  <FaPhone />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-600 mb-2">Enter message</label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full h-32"
                placeholder="Enter message"
                required></textarea>
              <span className="absolute right-3 top-3 text-mainBlue">
                <FaPencilAlt />
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-mainBlue text-white px-8 py-4 rounded-md font-bold">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
