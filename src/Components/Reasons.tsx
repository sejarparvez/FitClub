import adidas from "../assets/adidas.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import nike from "../assets/nike.png";
import Tick from "../assets/tick.png";

function Reasons() {
  return (
    <div className=" px-8 flex gap-8 flex-col md:flex-row" id="whyUs">
      <div className="flex-1 grid grid-cols-3 md:gap-4 gap-1 auto-rows-fr">
        <img
          src={image1}
          className=" md:h-[28rem] h-56 w-32 md:w-48 object-cover row-span-2"
          alt=""
        />
        <img src={image2} className=" object-cover col-span-2" alt="" />
        <img src={image3} className=" object-cover  bg-cover" alt="" />
        <img
          src={image4}
          className=" md:h-40 md:w-52 object-cover  bg-cover"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col uppercase gap-4">
        <span className=" font-bold text-orange-500">some reasons</span>
        <div className="font-bold text-[3rem] text-white">
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="flex flex-col gap-4 [&>*]:flex [&>*]:gap-4 text-white font-bold text-[1rem]">
          <div>
            <img src={Tick} className="w-8 h-8" alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={Tick} className="w-8 h-8" alt="" />
            <span>TRAIN SMATER AND FASTER BEFORE</span>
          </div>
          <div>
            <img src={Tick} className="w-8 h-8" alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={Tick} className="w-8 h-8" alt="" />
            <span>RELAIBLE PARTNERS</span>
          </div>
        </div>
        <span className=" text-gray-400">OUR PARTNERS</span>
        <div className="flex gap-8">
          <img src={nike} className="w-10 h-8" alt="" />
          <img src={adidas} className="w-10 h-8" alt="" />
          <img src={nb} className="w-10 h-8" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
