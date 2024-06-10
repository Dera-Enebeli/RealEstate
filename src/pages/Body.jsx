import React from "react";
import {
  BiAlignRight,
  BiRightArrow,
  BiRightArrowAlt,
  BiRuler,
  BiSolidRightArrow,
} from "react-icons/bi";
import { HiHome, HiLocationMarker } from "react-icons/hi";
import { IoBed, IoBedOutline, IoPerson, IoStarSharp } from "react-icons/io5";
import { GoGraph, GoLocation } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "../data/Cards";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick.css'

export default function Body() {
  return (
    <div>
      <div className="md:text-black bg-gray-200 shadow-2xl p-[5rem] relative h-auto">
        <div className="flex justify-center flex-wrap gap-6">
          <div className="p-10 rounded-md shadow-2xl bg-white w-[20rem] h-[10rem] text-center flex flex-col items-center">
            {/* <BiHome size={50} /> */}
            <div className="text-4xl font-bold">12,460</div>
            <p>Imports</p>
          </div>
          <div className="p-10 rounded-md shadow-2xl bg-white w-[20rem] h-[10rem] text-center flex flex-col items-center">
            {/* <BiHome size={50} /> */}
            <div className="text-4xl font-bold">10,700</div>
            <p>Selling rates</p>
          </div>
          <div className="p-10 rounded-md shadow-2xl bg-white w-[20rem] h-[10rem] text-center flex flex-col items-center">
            {/* <BiHome size={50} /> */}
            <div className="text-4xl font-bold">8,590</div>
            <p>Market Settlement</p>
          </div>
          <div className="p-10 rounded-md shadow-2xl bg-white w-[20rem] h-[10rem] text-center flex flex-col items-center">
            {/* <BiHome size={50} /> */}
            <div className="text-4xl font-bold">9,567</div>
            <p>Works</p>
          </div>
        </div>
      </div>

      <section className="relative bg-newBlue p-6 h-auto mb-[5rem]">
        <div className="flex flex-col md:px-[11.5rem] pb-[2rem] pt-[3rem]">
          <h1 className="text-orange-400">----- POPULAR</h1>

          <div className="flex flex-col md:flex-row justify-between">
            <h1 className="text-white pt-5 font-bold text-3xl md:text-4xl lg:text-5xl">
              Our Popular Homes
            </h1>

            <div className="flex place-items-end p-2 gap-2 text-lg mt-4 md:mt-0">
              <h1 className="text-white">Explore All</h1>
              <FaArrowRightLong className="font-bold text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-[1rem] mx-4 md:mx-[6rem] lg:mx-[12rem] justify-center">
          <div className="bg-white shadow-lg rounded-md w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
            <img
              src="/apt1.jpg"
              alt=""
              className="h-[17rem] w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center">
                <HiLocationMarker />
                <h1 className="p-2 pl-4 pb-3 font-bold">Banana Island Lagos</h1>
              </div>

              <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center">
                  <IoBedOutline className="text-newBlue" />
                  <h1>4 Bed</h1>
                </div>
                <div className="flex justify-center items-center">
                  <BiRuler />
                  <h1>10x10 m</h1>
                </div>
                <div className="flex justify-center items-center">
                  <GoGraph />
                  <h1>1600 m</h1>
                </div>
              </div>

              <div className="flex justify-between mt-3">
                <h1 className="text-white p-2 pl-4 pb-3 flex items-center bg-newBlue rounded-md">
                  View Properties <BiRightArrowAlt />{" "}
                </h1>

                <button className="font-bold">&#8358;100,000</button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
            <img
              src="/apt1.jpg"
              alt=""
              className="h-[17rem] w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center">
                <HiLocationMarker />
                <h1 className="p-2 pl-4 pb-3 font-bold">Banana Island Lagos</h1>
              </div>

              <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center">
                  <IoBedOutline className="text-newBlue" />
                  <h1>4 Bed</h1>
                </div>
                <div className="flex justify-center items-center">
                  <BiRuler />
                  <h1>10x10 m</h1>
                </div>
                <div className="flex justify-center items-center">
                  <GoGraph />
                  <h1>1600 m</h1>
                </div>
              </div>

              <div className="flex justify-between mt-3">
                <h1 className="text-white p-2 pl-4 pb-3 flex items-center bg-newBlue rounded-md">
                  View Properties <BiRightArrowAlt />{" "}
                </h1>

                <button className="font-bold">&#8358;100,000</button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
            <img
              src="/apt1.jpg"
              alt=""
              className="h-[17rem] w-full object-cover"
            />
            <div className="p-4">
              <div className="flex items-center">
                <HiLocationMarker />
                <h1 className="p-2 pl-4 pb-3 font-bold">Banana Island Lagos</h1>
              </div>

              <div className="flex justify-between gap-6">
                <div className="flex justify-center items-center">
                  <IoBedOutline className="text-newBlue" />
                  <h1>4 Bed</h1>
                </div>
                <div className="flex justify-center items-center">
                  <BiRuler />
                  <h1>10x10 m</h1>
                </div>
                <div className="flex justify-center items-center">
                  <GoGraph />
                  <h1>1600 m</h1>
                </div>
              </div>

              <div className="flex justify-between mt-3">
                <h1 className="text-white p-2 pl-4 pb-3 flex items-center bg-newBlue rounded-md">
                  View Properties <BiRightArrowAlt />{" "}
                </h1>

                <button className="font-bold">&#8358;100,000</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex text-gray-900 font-semibold justify-center">
        <div>
          <p className="text-center text-orange-200 pb-4">Our Services</p>
          <p className="text-2xl md:text-5xl text-gray-900 font-bold">
            Our Main Focus
          </p>
        </div>
      </section>

      <Cards />
 <section className="flex flex-col bg-slate-100 px-4 sm:px-10 md:py-10 md:px-20 gap-6 items-center lg:flex-row">
      <div className="flex-none">
        <img
          src="/main_apt8.jpg"
          alt="Apartment"
          className="h-64 mt-5 sm:h-80 md:h-[40rem] w-full lg:w-[30rem] shrink-0 shadow-lg object-cover rounded-md border-t-4 border-r-4 border-b-4 border-l-4 border-white"
        />
      </div>

      <div className="flex-grow p-4 sm:p-8 md:p-12 lg:p-16">
        <p className="text-lg font-semibold pb-3">Luxury Apartment</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Comfort is our <br /> Top Priority for you.
        </h1>
        <p className="text-gray-700 pb-6">
          12th City is one of Africa’s most respected names in real estate
          development and is recognized as a premier developer of Class A
          residential and commercial properties throughout the continent.
          legacy.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <ul className="list-disc pl-5">
            <li className="p-1">Lorem ipsum dolor sit amet.</li>
            <li className="p-1">Lorem ipsum dolor sit amet.</li>
          </ul>
          <ul className="list-disc pl-5">
            <li className="p-1">Lorem ipsum dolor sit amet.</li>
            <li className="p-1">Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>

        <div className="bg-orange-100 mt-6 p-4 border-l-4 border-newBlue">
          <p>
            "The magic thing about home is that it feels good to leave, and it
            feels even better to come back."
          </p>
        </div>

        <button className="bg-newBlue text-white p-4 rounded-sm mt-6">
          Book Now
        </button>
      </div>
    </section>

      <section className="relative">
        <div>
          <img src="/new_map2.jpg" alt="" className="w-full h-[18rem]" />
          <div className="flex flex-col justify-center items-center absolute inset-0 p-4">
            <p className="pb-6 text-orange-200">// Have any enquiries? //</p>
            <h1 className="text-xl md:text-6xl font-bold text-white">
              +234 911-543-4458
            </h1>
            <div className="mt-10 text-white flex gap-10">
              <button className="text-sm bg-orange-300 p-4 semibold-bold md:text-lg">
                <h1>send a mail</h1>
              </button>
              <button className="text-sm bg-orange-300 p-4 semibold-bold md:text-lg">
                <h1>chat via whatsapp</h1>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative mb-[20rem] py-12 mt-12 rounded-lg shadow-xl md:mb-[25rem] lg:mb-[10rem]">
        <div className="relative">
          <img
            src="/inside_furniture.jpg"
            alt=""
            className="w-full h-[40rem] object-cover opacity-0.10 inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-white-900 opacity-75"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="flex flex-col absolute top-[5rem] justify-start p-6 mb-8">
              <p className="text-sm md:text-lg font-semibold pb-6 text-customWhite">
                Upcoming Projects.
              </p>
              <h1 className="text-2xl text-customWhite md:text-5xl leading-[1.1] font-bold pb-10 mb-4">
                Setting New Standards <br /> For Your Dream Living Space
              </h1>

              <div className="flex justify-center bg-white shadow-lg p-4">
                <div className="flex flex-col md:flex-col gap-4 lg:flex-row">
                  <div>
                    <img
                      src="/apt1.jpg"
                      alt="Your Image"
                      className="h-[23rem] w-[35rem] object-cover"
                    />
                  </div>

                  <div className="flex flex-col pt-10 pl-8 bg-customHouse gap-2 lg:w-[27rem]">
                    <p className="text-orange-200 font-bold">Onyi</p>
                    <h1 className="font-bold text-2xl">Project Onyi</h1>

                    <p className="pt-10">The Onyi project</p>
                    <button className="mb-4 flex p-5 bg-orange-200 justify-center w-[15rem] mt-4">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative mb-[30rem] md:mb-[10rem] mt-10">
        <div>
          <img
            src="home.jpg"
            alt=""
            className="w-full h-[30rem] bg-gradient-to-b from-blue-500 to-purple-900"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-white-900 opacity-75"></div>

          <div className="flex flex-col pl-5 text-center justify-start absolute inset-0 md:px-[5rem] lg:px-[12rem] py-[5rem]">
            <h1 className="text-lg px-10 text-white md:text-2xl">
              Client Testimonials
            </h1>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">
                See What Our Clients <br /> Says About Us
              </h1>
            </div>
          </div>
        </div>

        <div className="p-2 absolute inset-0 top-[18rem] flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 mx-auto my-auto">
            <div className="border rounded-lg bg-white shadow-lg p-10 flex-shrink-0">
              <div className="flex mb-5">
                <div className="flex items-center justify-center bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
                  <IoPerson color="gray" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold">Sotommom</h2>
                  <div className="flex text-yellow-400 justify-end items-center">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                HalveGain has completely changed the way I approach
                cryptocurrency trading. As someone relatively new to the world
                of digital assets, I was initially hesitant to dive in.
              </p>
              <div className="max-w-lg mt-10">
                <div className="flex flex-col p-2 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 mx-auto my-auto">
            <div className="border rounded-lg bg-white shadow-lg p-10 flex-shrink-0">
              <div className="flex mb-5">
                <div className="flex items-center justify-center bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
                  <IoPerson color="gray" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold">Sotommom</h2>
                  <div className="flex text-yellow-400 justify-end items-center">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                HalveGain has completely changed the way I approach
                cryptocurrency trading. As someone relatively new to the world
                of digital assets, I was initially hesitant to dive in.
              </p>
              <div className="max-w-lg mt-10">
                <div className="flex flex-col p-2 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="text-center flex justify-center flex-col items-center md:mt-[5rem] lg:mb-[rem]">
        <div className="text-orange-400">From our Blog</div>
        <div className="text-5xl font-bold">Latest News & Events</div>
      </section>
    </div>
  );
}
