import whitetick from "../assets/whiteTick.png";
import { plansData } from "../data/plansData";

function Plans() {
  return (
    <div className="md:-mt-16 flex flex-col gap-16 relative px-12" id="plans">
      <div className="blur top-24 left-24"></div>
      <div className="blur right-0 top-24"></div>

      <div className="flex justify-between text-white font-bold text-3xl flex-col md:flex-row items-center md:text-5xl italic">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* plans card */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        {plansData.map((plans, i) => (
          <div
            className="flex flex-col bg-[#656565] text-white gap-8 p-6 w-[18rem] even:bg-gradient-to-bl from-red-500 to-orange-500 even:scale-110"
            key={i}
          >
            {plans.icon}
            <span className="font-bold text-[1rem]">{plans.name}</span>
            <span className="font-bold text-[3rem] ">$ {plans.price}</span>
            <div className="flex flex-col gap-4">
              {plans.features.map((features, i) => (
                <div className="flex items-center gap-4">
                  <img src={whitetick} className="w-4" alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-[0.8rem]">See more benefits ➔</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
