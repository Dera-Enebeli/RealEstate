import React, { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("Invest In The Future Of Real Estate");
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
      setText("Our Modern Living Quarters");
    } else {
      setCurrent(current - 1);
      setText("Invest In The Future Of Real Estate");
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
      setText("Invest In The Future Of Real Estate");
    } else {
      setCurrent(current + 1);
      setText("Our Modern Living Quarters");
    }
  };

  return (
    <div
      className="overflow-hidden relative h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
    <div
        className="flex transition-transform ease-out duration-400 h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`slide-${index}`}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ flex: "0 0 100%" }}
          />
        ))}
      </div>



      <MotionConfig transition={{ duration: 0.7 }}>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-0 h-full w-full flex justify-between items-center text-white px-4 sm:px-6 md:px-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.button
                onClick={prevSlide}
                whileHover={{
                  backgroundColor: "rgb(254,215,170)",
                  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                }}
                className="bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 lg:p-5">
                <GoArrowLeft size={25} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{
                  backgroundColor: "rgb(254,215,170)",
                  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                }}
                className="bg-black bg-opacity-50 p-2 sm:p-3 md:p-4 lg:p-5">
                <GoArrowRight size={25} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>

      <div className="absolute bottom-[6rem] py-2 sm:py-3 md:py-4 flex justify-center gap-2 sm:gap-3 md:gap-4 w-full z-20">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3 cursor-pointer ${
              i === current ? "bg-orange-200" : "bg-black"
            }`}></div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col justify-center items-center w-[90vw] md:w-[70vw] lg:w-[30vw] bg-white opacity-90 z-10">
        <AnimatePresence>
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-center font-bold p-4 text-newBlue text-2xl md:text-2xl lg:text-3xl">
            {text}
          </motion.div>
        </AnimatePresence>
        <button className="sm:text-sm bg-orange-200 opacity-100 p-4 text-white text-sm">
          PROPERTIES LISTINGS
        </button>
      </div>
    </div>
  );
}

