import RightArrow from "../assets/rightArrow.png";
import { programsData } from "../data/programsData";

function Programs() {
  return (
    <div className="flex flex-col gap-8 py-8  mt-28 md:mt-0" id="programs">
      <div className="flex md:gap-20 gap-4 text-4xl font-bold md:text-[3rem] justify-center text-white uppercase italic flex-col md:flex-row items-center">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="flex gap-8 px-12 flex-col md:flex-row">
        {programsData.map((programs) => (
          <div className="flex flex-col bg-gradient-to-bl from-gray-400 to-gray-500 p-8 gap-4 justify-between text-white hover:from-red-500 hover:to-yellow-500 cursor-pointer">
            {programs.image}
            <span className=" font-bold text-md">{programs.heading}</span>
            <span>{programs.details}</span>
            <div className=" flex items-center gap-8 font-bold">
              <span>Join Now</span>{" "}
              <img src={RightArrow} className="w-4 h-4" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
