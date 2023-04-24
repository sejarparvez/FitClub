import { useState } from "react";
import { Link } from "react-scroll";
import Bars from "../assets/bars.png";
import Logo from "../assets/logo.png";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className="w-40 h-12" alt="" />

      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => {
            setMenuOpened(true);
          }}
        >
          {" "}
          <img
            src={Bars}
            className="w-14 h-112 bg-gray-800 p-3 fixed right-6 z-50"
            alt=""
          />
        </div>
      ) : (
        <ul className="flex text-white gap-8 [&>*]:cursor-pointer  z-50 flex-col bg-gray-800 p-4 md:flex-row md:bg-transparent right-8 fixed md:static">
          <li className="hover:text-orange-600">
            <Link
              to="home"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-orange-600">
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Programs
            </Link>
          </li>
          <li className="hover:text-orange-600">
            <Link
              to="whyUs"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Why Us
            </Link>
          </li>
          <li className="hover:text-orange-600">
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Plans
            </Link>
          </li>
          <li className="hover:text-orange-600">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
