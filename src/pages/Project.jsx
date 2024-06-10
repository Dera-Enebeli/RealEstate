import React from "react";
import { HiHome } from "react-icons/hi";

export default function Project() {
  return (
    <div>
      <div className="px-6 bg-customWhite lg:px-[10rem] py-12">
        <h1 className="text-2xl text-black md:text-4xl font-bold mb-8">
          1 Room Apartment
        </h1>
        <div className="flex items-center">
          <HiHome size={25} className="mr-2 text-orange-200" />
          <p className="inline-block text-gray-700 font-bold">
            Overview &gt; <span className=""></span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}
