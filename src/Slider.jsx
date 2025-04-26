import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const images = ["/main_apt1.jpg", "/main_apt2.jpg"];
const captions = [
  "Invest In the Future of Real Estate",
  "Experience Modern Luxury Living",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const prev = () => current > 0 && setCurrent(current - 1);
  const next = () => current < images.length - 1 && setCurrent(current + 1);

  return (
    <div
      className="relative w-full h-[40rem] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <MotionConfig transition={{ duration: 0.8, ease: "easeInOut" }}>
        {/* Sliding Images */}
        <motion.div
          className="absolute top-0 left-0 flex w-full h-full"
          animate={{ x: `-${current * 100}%` }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full object-cover h-full flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* Arrows */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 flex justify-between items-center px-8 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <button
                onClick={prev}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-orange-300 transition-shadow shadow-lg">
                <GoArrowLeft size={28} className="text-newBlue" />
              </button>
              <button
                onClick={next}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-orange-300 transition-shadow shadow-lg">
                <GoArrowRight size={28} className="text-newBlue" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-orange-400 scale-125" : "bg-white/80"
              }`}
            />
          ))}
        </div>
      </MotionConfig>

      {/* Static Overlay - NO LONGER MOVES */}
      <div
        onClick={() => navigate("/project")}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[85vw] md:w-[60vw] lg:w-[30vw] bg-white/70 p-8 shadow-2xl cursor-pointer h-[16rem] flex flex-col justify-center items-center">
        <h2 className="text-center text-newBlue font-semibold text-xl md:text-4xl mb-4">
          {captions[current]}
        </h2>
        <div className="mx-auto w-max bg-orange-300 hover:shadow-[0_20px_60px_rgba(255,115,0,0.5)] transition-all duration-300 text-white px-6 py-4 text-md font-bold">
          EXPLORE PROPERTIES
        </div>
      </div>
    </div>
  );
}
