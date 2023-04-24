import { motion } from "framer-motion";
import React, { useState } from "react";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";

function Testimonians() {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const tLenth = testimonialsData.length;
  return (
    <div className="flex px-8 gap-4 flex-col md:flex-row" id="testimonials">
      <div className="flex flex-1 gap-8 flex-col uppercase text-white">
        <span className=" text-orange-500 font-bold">Testimonials</span>
        <span className="stroke-text font-bold text-[3rem]">What they</span>
        <span className=" font-bold text-[3rem]">say about us</span>
        <span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
        </span>
        <span className="flex gap-8">
          <span className=" text-orange-500">
            {testimonialsData[selected].name}
          </span>
          <span> ---{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="flex-1 relative mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="hidden md:block absolute w-[17rem] h-[20rem] border-[2px] border-solid border-orange-500 right-[9.5rem] top-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="absolute w-[17rem] h-[19rem] right-3 bottom-0 md:right-28 md:top-16 bg-gradient-to-bl from-red-500 to-orange-500"
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          className="md:w-[17rem] relative md:absolute h-[17rem] w-60 md:h-[20rem] object-cover md:right-32 -right-3 md:top-8"
          alt=""
        />
        <div className=" absolute flex gap-4 md:bottom-4 md:left-12 left-28 mt-8 md:mt-0">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLenth - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={LeftArrow}
            className="w-6 cursor-pointer"
            alt=""
          />
          <img
            onClick={() => {
              selected === tLenth - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={RightArrow}
            className="w-6 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonians;
