import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate


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
  FaGraduationCap,
} from "react-icons/fa";

export default function AffiliateProgram() {
  const navigate = useNavigate();


  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    qualification: "",
    experience: "",
    cv: null,
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

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      cv: e.target.files[0], // Get the first file
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const data = new FormData();

    // Append form data
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/forms/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
    }

      const result = await response.json();
      console.log(result); // Handle success (show a message, etc.)
      // SweetAlert for success
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully!",
      }).then(() => {
        navigate("/");
      })
    } catch (error) {
      console.error("Error:", error);

      // SweetAlert for error
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Error submitting form. Please try again.",
      });

            // Clear form after successful submission
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
    }
  };

  return (
    <>
      <header className="bg-gradient-to-r from-[#FED7AA] to-mainBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Want to work with us or become an agent?
        </h1>
        <p className="text-lg">
          Join our affiliate program and be part of our ever-growing team
        </p>
      </header>

      <div className="container mx-auto px-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {/* Email */}
    <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
      <FaEnvelope className="text-4xl text-mainBlue mb-4" />
      <h3 className="text-xl font-bold">Email Address</h3>
      <a
        href="mailto:onyidorisluxuryapartments@gmail.com"
        className="text-gray-600 mt-2 hover:underline"
      >
        onyidorisluxuryapartments@gmail.com
      </a>
    </div>

    {/* Phone (WhatsApp) */}
    <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
      <FaPhone className="text-4xl text-mainBlue mb-4" />
      <h3 className="text-xl font-bold">Phone Number</h3>
      <a
        href="https://wa.me/2348136271063"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 mt-2 hover:underline"
      >
        +234 (0) 8136271063
      </a>
    </div>

    {/* Office Address */}
    <div className="flex flex-col items-center p-6 border rounded-md shadow-md bg-white">
      <FaMapMarkerAlt className="text-4xl text-mainBlue mb-4" />
      <h3 className="text-xl font-bold">Office Address</h3>
      <p className="text-gray-600 mt-2 text-center">
        No 817 Edmund Medani Crescent Mabushi, Abuja.
      </p>
    </div>
  </div>
</div>


        <div className="bg-white p-8 shadow-lg rounded-md max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Fill the form</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
                <label className="text-gray-600 mb-2">
                  Enter email address
                </label>
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
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Enter your address</label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md w-full"
                    placeholder="Enter your address"
                    required
                  />
                  <span className="absolute right-3 top-3 text-mainBlue">
                    <FaAddressCard />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Date of birth</label>
                <div className="relative">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md w-full"
                    required
                  />
                  <span className="absolute right-3 top-3 text-mainBlue">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">
                  Select Qualification
                </label>
                <div className="relative">
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md w-full"
                    required>
                    <option value="">Select Qualification</option>
                    <option value="High School">High School</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate">Doctorate</option>
                  </select>
                  <span className="absolute right-3 top-3 text-mainBlue">
                    <FaGraduationCap />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Select Experience</label>
                <div className="relative">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded-md w-full"
                    required>
                    <option value="">Select Experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                  <span className="absolute right-3 top-3 text-mainBlue">
                    <FaBriefcase />
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">
                  Upload your CV (20mb max size)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    onChange={handleFileChange}
                    className="border border-gray-300 p-3 rounded-md w-full"
                    required
                  />
                  <span className="absolute right-3 top-3 text-mainBlue">
                    <FaFileUpload />
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
                  placeholder="Enter message"></textarea>
                <span className="absolute right-3 top-3 text-mainBlue">
                  <FaPencilAlt />
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-mainBlue text-white px-8 py-4 rounded-md font-bold hover:bg-[#FED7AA]-700">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
    </>
  );
}
