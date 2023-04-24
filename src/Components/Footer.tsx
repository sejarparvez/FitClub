import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className=" relative">
      <hr className=" border-[1px] border-gray-400" />
      <div className=" py-4 px-8 flex flex-col gap-16 items-center justify-center h-[20rem]">
        <div className="flex gap-16">
          <img src={Github} className=" h-8 w-8 cursor-pointer" alt="" />
          <img src={Instagram} className=" h-8 w-8 cursor-pointer" alt="" />
          <img src={Linkedin} className=" h-8 w-8 cursor-pointer" alt="" />
        </div>
        <div className=" w-40">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur bottom-0"></div>
    </div>
  );
}

export default Footer;
