import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const images = ["/main_apt1.jpg", "/main_apt2.jpg"];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState("Invest In The Future Of Real Estate");

  const onPrevClick = () => {
    if (current > 0) {
      setText("Invest In The Future Of Real Estate");
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
      setText("Our Modern Living Quarters");
    }
  };

  return (
    <main className="flex relative flex-col items-center justify-between">
      <MotionConfig transition={{ duration: 0.7 }}>
        <div className="flex items-center">
          <AnimatePresence>
            {isFocus && (
              <motion.div
                className="absolute left-2 right-2 flex justify-between z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onHoverStart={() => setIsFocus(true)}
                onHoverEnd={() => setIsFocus(false)}>
                <motion.button
                  onClick={onPrevClick}
                  whileHover={{
                    backgroundColor: "rgba(254, 215, 170)",
                    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                  }}
                  className="h-[3rem] w-[3rem] border z-50 border-orange-200 m-4 p-2 shrink-0 hover:text-white">
                  <GoArrowLeft size={25} />
                </motion.button>

                <motion.button
                  onClick={onNextClick}
                  whileHover={{
                    backgroundColor: "rgba(254, 215, 170)",
                    transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                  }}
                  className="h-[3rem] w-[3rem] z-50 border border-orange-200 m-4 p-2 shrink-0 hover:text-white">
                  <GoArrowRight size={25} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="flex gap-4 flex-nowrap"
            animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
            onHoverStart={() => setIsFocus(true)}
            onHoverEnd={() => setIsFocus(false)}>
            {images.map((image, id) => (
              <img
                key={id}
                src={image}
                alt={image}
                className="object-cover md:w-full h-[40rem] lg:aspect-[20/8]"
              />
            ))}
          </motion.div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3 px-3 py-2 rounded-full opacity-80">
              {[...images].map((_, id) => (
                <button key={id} onClick={() => setCurrent(id)}>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      id === current ? "bg-orange-200" : "bg-black"
                    }`}></div>
                </button>
              ))}
            </div>
          </div>

          <section className="flex justify-center gap-4 border border-green-300 relative">
        <div className="absolute top-0 left-0 right-0 bottom-20">
          <div>
            <img
              src="/icon1.png"
              alt=""
              className="h-56 w-56 border border-green-300"
            />
          </div>
          <div>
            <img
              src="/icon1.png"
              alt=""
              className="h-56 w-56 border border-green-300"
            />
          </div>
          <div>
            <img
              src="/icon1.png"
              alt=""
              className="h-56 w-56 border border-green-300"
            />
          </div>
        </div>
      </section>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col justify-center items-center w-[90vw] md:w-[70vw] lg:w-[30vw] bg-white opacity-90">
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
          <button className="sm:text-sm bg-orange-400 p-4 text-white text-sm">
            PROPERTIES LISTINGSeirbgpqiuheuryhiehguhkriughquh4iurhe
          </button>
        </div>
      </MotionConfig>
    </main>
  );

return
}
