import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Calories from "../assets/calories.png";
import Heart from "../assets/heart.png";
import HeroImage from "../assets/hero_image.png";
import HeroImageBack from "../assets/hero_image_back.png";
import Header from "./Header";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 764 ? true : false;
  return (
    <div className=" flex justify-between flex-col md:flex-row" id="home">
      {/* left side */}
      <div className="blur"></div>
      <div className="px-8 pt-6 pb-8 flex-[3] flex gap-8 flex-col">
        <Header />
        <div className=" md:mt-16 mt-10 bg-[#363d42] rounded-full w-fit px-5 py-4 text-white flex relative items-center justify-start">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
            className=" absolute bg-orange-500 w-20 h-[80%] left-2 rounded-[3.5rem] z-[1]"
          ></motion.div>
          <span className="z-[2]">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* hero heading*/}
        <div className="flex flex-col gap-6 text-[3rem] items-center md:items-start md:text-[4.5rem] font-bold text-white ">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div className=" text-[1rem] font-light w-[80%] tracking-[1px]">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="flex gap-8 [&>*]:flex [&>*]:flex-col">
          <div>
            <span className=" text-white text-[1.5rem] md:text-[2rem]">
              <NumberCounter end={140} start={100} delay={4} postFix="+" />
            </span>
            <span className=" text-gray-400 uppercase">expert coach's</span>
          </div>
          <div>
            <span className=" text-white text-[1.5rem] md:text-[2rem]">
              <NumberCounter end={978} start={800} delay={4} postFix="+" />
            </span>
            <span className=" text-gray-400 uppercase">members joined</span>
          </div>
          <div>
            <span className=" text-white text-[1.5rem] md:text-[2rem]">
              <NumberCounter end={50} start={10} delay={4} postFix="+" />
            </span>
            <span className=" text-gray-400 uppercase">fitness programs </span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="flex gap-4">
          <button className=" btn !text-white w-32 !bg-orange-500">
            Get Started
          </button>
          <button className=" !bg-transparent btn !text-white w-32 border-[2px] border-solid border-orange-500">
            Learn More
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 relative bg-none md:bg-orange-500 mt-8 md:mt-0">
        <button className="absolute right-12 font-bold hidden md:block top-8 text-black bg-white px-6 py-2 rounded-md">
          Join now
        </button>
        <motion.div
          initial={{ right: mobile ? "-5rem" : "-1rem" }}
          whileInView={{ right: mobile ? "-12rem" : "4rem" }}
          transition={transition}
          className=" flex flex-col gap-4 bg-gray-700 w-fit p-4 items-start rounded-[5px] relative md:absolute top-1  md:top-32"
        >
          <img src={Heart} className="w-8" alt="" />
          <span className=" text-gray-400">Heart Rate</span>
          <span className="text-white text-[1.5rem]">116 bpm</span>
        </motion.div>
        {/* hero image */}
        <img
          src={HeroImage}
          className="absolute mt-8 md:-mt-6 md:top-40 md:right-44 right-0 w-60 md:w-[23rem] z-10"
          alt=""
        />
        <motion.img
          initial={{ right: mobile ? "20rem" : "11rem" }}
          whileInView={{ right: mobile ? "8rem" : "20rem" }}
          transition={transition}
          src={HeroImageBack}
          className="absolute w-40  md:top-16  md:w-[14rem]"
          alt=""
        />
      </div>

      <motion.div
        initial={{ right: mobile ? "2rem" : "48rem" }}
        whileInView={{ right: mobile ? "-1rem" : "27rem" }}
        transition={transition}
        className="flex gap-8 bg-[#656565] rounded-[5px] px-6 py-4 w-fit md:absolute  scale-[0.8] md:scale-100 -top-[10.5rem] md:top-[39rem] relative flex-col md:flex-row "
      >
        <img src={Calories} className="w-12" alt="" />
        <div className="flex flex-col justify-between">
          <span className=" text-gray-400">Calories Burned</span>
          <span className="text-white text-[1.5rem]">220 kcl</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
