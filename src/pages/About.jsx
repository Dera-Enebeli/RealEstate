import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { GoTools } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { HiMiniHomeModern } from "react-icons/hi2";
import { GrUserWorker } from "react-icons/gr";

export default function About() {
  return (
    <section>
      <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">
          About Us
        </h1>
        <div className="flex items-center">
          <HiHome size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-semibold">
            Home &gt; <span className="font-bold">About Us</span>
          </p>
        </div>
      </div>

      <section className="flex flex-col sm:px-[5rem] md:py-[5rem] md:px-[10rem] gap-6 items-center lg:flex-row ">
        <div className="flex-none">
          <img
            src="/main_apt4.jpg"
            alt="Apartment"
            className="h-[40rem] w-[30rem] shrink-0 shadow-lg object-cover rounded-md border-t-[1rem] border-r-[1rem] border-b-[1rem] border-l-[1rem] border-white"
          />
        </div>

        <div className="flex-grow p-[3.5rem]">
          <p className="text-lg font-semibold">About us</p>
          <h1 className="text-5xl font-bold mb-4">
            The Leading Real Estate Marketplace.
          </h1>
          <p className="text-gray-700">
            Welcome to Onyidoris Luxury Apartments and Suites, the Epitome of
            Luxury and Innovation in African Real Estate. At Onyidoris Luxury
            Apartments and Suites, we redefine the art of property development
            and convenient accommodation solutions, creating and providing
            iconic residential and commercial spaces that embody sophistication
            and modern elegance. With our headquarters nestled in the vibrant
            heart of Abuja, Nigeria, we stand at the forefront of the African
            real estate landscape. Our commitment goes beyond rental services
            and constructing buildings; we craft unparalleled living and working
            environments that provide exceptional value and lasting legacy. Each
            of our property is a testament to our dedication to quality,
            innovation, and sustainability, ensuring we meet client-needs. Join
            us at Onyidoris Luxury Apartments and Suites , where we transform
            visions into reality and every development is a landmark of
            distinction. Embrace the future of African real estate by renting
            with us, buying from us or building your legacy today.
          </p>
          <div className="bg-red-50 mt-[2rem] p-4 border-l-[0.4rem] border-orange-200">
            <p>
              "The true magic of home lies in the journey—it calls you to
              explore the world, but its greatest power is in drawing you back,
              where your heart finds its deepest comfort."
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap bg-gray-700 text-white justify-around p-[2rem] md:p-[5rem] lg:p-[10rem] gap-6">
        <div className="border border-gray-600 text-center p-6 h-auto w-full md:w-[20rem]">
          <div className="flex items-center justify-center mb-4">
            <HiMiniHomeModern size={55} />
            <h1 className="font-bold text-2xl p-4">Our Mission</h1>
          </div>
          <p>
            "To empower every client with unparalleled expertise, long-lasting
            relationships, innovative solutions, and a personalized approach,
            ensuring a seamless journey from dream to reality in the real estate
            market, with integrity and professionalism."
          </p>
        </div>

        <div className="border border-gray-600 text-center p-6 h-auto w-full md:w-[20rem]">
          <div className="flex items-center justify-center mb-4">
            <GoTools size={55} />
            <h1 className="font-bold text-2xl p-4">Our Core Values</h1>
          </div>
          <div className="p-4">
            <p>Relationship: community, love, and generosity.</p>
          </div>
          <div className="p-4">
            <p>Excellence: professionalism, competence, and quality.</p>
          </div>
          <div className="p-4">
            <p>Accountability: responsibility, reliability, and integrity.</p>
          </div>
          <div className="p-4">
            <p>Loyalty: commitment, dedication, and discipline.</p>
          </div>
        </div>

        <div className="border border-gray-600 text-center p-6 h-auto w-full md:w-[20rem]">
          <div className="flex items-center justify-center mb-4">
            <GrUserWorker size={55} />
            <h1 className="font-bold text-2xl p-4">Our Vision</h1>
          </div>
          <p>
            "To be the leading real estate company renowned for transforming the
            industry through exceptional service, cutting-edge technology, and
            sustainable practices, while driving scalability and innovation in
            the market and creating vibrant communities where dreams thrive and
            investments flourish."
          </p>
        </div>
      </section>
    </section>
  );
}
