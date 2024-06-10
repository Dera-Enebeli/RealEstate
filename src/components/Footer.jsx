import React from "react";

export default function Footer() {
  return (
    <div className="bg--400">
      <div className="flex justify-center items-center py-8">
        <img src="/logo4.png" alt="" className="w-[20rem] md:w-[25rem] lg:w-[30rem] min-w-[20rem] md:min-w-[25rem] lg:min-w-[30rem]" />
      </div>

      <section className="relative flex flex-col items-center text-white py-8 md:py-16">
        <div className="absolute -top-[-1rem] md:-top-[-5rem] w-[95%] md:w-[80%] bg-mainBlue text-center p-8 rounded-md md:flex md:items-center md:justify-between md:gap-10">
          <div className="mb-4 md:mb-0 md:mr-10">
            <h1 className="text-2xl md:text-4xl font-bold">Join our affiliate program</h1>
            <p className="text-white pt-5">Want to be a part of our ever-growing team?</p>
          </div>
          <button className="bg-white text-gray-900 px-8 py-4 mt-4 md:mt-0">Join now</button>
        </div>
      </section>

      <section className="flex flex-col items-center text-white md:flex-row md:justify-evenly py-24 mt-16 bg-gray-400">
        <div className="mb-8 mt-8 md:mb-0 flex justify-center">
          <img src="/ODLA white.png" alt="" className="w-[15rem] md:w-[20rem] min-w-[15rem] md:min-w-[20rem]" />
        </div>

        <div className="leading-8 text-center md:text-left mb-8 md:mb-0 md:px-6">
          <h1 className="text-lg font-bold mb-4">Company</h1>
          <p className="mb-3">About</p>
          <p className="mb-3">Events</p>
          <p className="mb-3">Contacts</p>
        </div>

        <div className="leading-8 text-center md:text-left mb-8 md:mb-0 md:px-6">
          <h1 className="text-lg font-bold mb-4">Project</h1>
          <p className="mb-3">About</p>
          <p className="mb-3">Events</p>
          <p className="mb-3">Contacts</p>
        </div>

        <div className="leading-8 text-center md:text-left mb-8 md:mb-0 md:px-6">
          <h1 className="text-lg font-bold mb-4">Contact Us</h1>
          <p className="mb-3">Unit III, Plot 204 Pius Anyim Street, Off Olusegun Obasanjo Way, Wuye, Abuja FCT</p>
          <p className="mb-3">+234 915-434-458</p>
          <p className="mb-3">leslie@gmail.com</p>
        </div>

        <div className="leading-8 text-center md:text-left mb-8 md:mb-0 md:px-6">
          <h1 className="text-lg font-bold mb-4">Social</h1>
          <p className="mb-3">Follow us on social media</p>
        </div>
      </section>

      <section className="bg-mainBlue text-white flex flex-col text-center p-6 md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <p>All Rights Reserved @ 12th City Real Estate Developers 2024</p>
        </div>

        <div>Terms & Conditions Privacy & Policy</div>
      </section>
    </div>
  );
}
