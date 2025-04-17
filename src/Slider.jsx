import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const images = [
  "/main_apt1.jpg",
  "/main_apt2.jpg",
];
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
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MotionConfig transition={{ duration: 0.8, ease: "easeInOut" }}>
        {/* Image Carousel */}
        <motion.div
          className="flex transition-transform"
          animate={{ x: `-${current * 100}%` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="object-cover md:w-full h-[40rem] lg:aspect-[20/8]"
            />
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 flex justify-between items-center px-8 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={prev}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-orange-300 transition-shadow shadow-lg"
              >
                <GoArrowLeft size={28} className="text-newBlue" />
              </button>
              <button
                onClick={next}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-orange-300 transition-shadow shadow-lg"
              >
                <GoArrowRight size={28} className="text-newBlue" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-orange-400 scale-125' : 'bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Clickable Caption Overlay */}
        <div
          onClick={() => navigate('/project')}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[85vw] md:w-[60vw] lg:w-[30vw] bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-2xl cursor-pointer hover:bg-white/90 transition-all duration-300"
        >
          <AnimatePresence>
            <motion.h2
              key={captions[current]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center text-newBlue font-bold text-xl md:text-2xl mb-4"
            >
              {captions[current]}
            </motion.h2>
          </AnimatePresence>
          <div className="mx-auto w-max bg-gradient-to-r from-orange-300 to-orange-400 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-orange-500 hover:to-orange-700 transition-colors">
            Explore Properties
          </div>
        </div>
      </MotionConfig>
    </div>
  );
}
