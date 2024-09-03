import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  BuildingOfficeIcon,
  GlobeAmericasIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import logo from "../img/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="flex justify-around shadow-sm  p-4 items-center">
      <div className="logo-container">
        <Link to="/">
          <img className="w-36" src={logo} />
        </Link>
      </div>
      <div className="nav-items flex items-center pr-5 cursor-pointer">
        <ul className="flex gap-5 items-center">
          <li className="px-4 py-2   hover:bg-orange-400 hover:text-white rounded-lg">
            <Link className="flex gap-2" to="/">
              <HomeIcon className="w-4 " /> Home
            </Link>
          </li>
          <li className="px-4 py-2   hover:bg-orange-400 hover:text-white rounded-lg">
            <Link className="flex gap-2" to="/about">
              <BuildingOfficeIcon className="w-4" />
              About Us
            </Link>
          </li>
          <li className="px-4 py-2  hover:bg-orange-400 hover:text-white rounded-lg">
            <Link className="flex gap-2" to="/contact">
              <PhoneIcon className="w-4" />
              Contact Us
            </Link>
          </li>
          <li className="flex gap-2 px-6 py-3 text-white  bg-orange-400 hover:bg-orange-600 rounded-xl cursor-pointer">
            <ShoppingBagIcon className="w-4" />
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
