import { Link } from "react-router-dom";
import {
  HomeIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const headerLinkStyle =
    "px-4 py-2  hover:bg-orange-400 hover:text-white rounded-lg";

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-around shadow-sm  p-4 items-center">
      <div className="logo-container">
        <Link to="/">
          <img className="w-36" src={logo} />
        </Link>
      </div>
      <div className="nav-items flex items-center pr-5">
        <ul className="flex gap-5 items-center">
          <Link className={headerLinkStyle} to="/">
            <li className="flex gap-2  ">
              <HomeIcon className="w-4 " /> Home
            </li>
          </Link>
          <Link className={headerLinkStyle} to="/about">
            <li className="flex gap-2">
              <BuildingOfficeIcon className="w-4" />
              About
            </li>
          </Link>
          <Link className={headerLinkStyle} to="/contact">
            <li className="flex gap-2">
              <PhoneIcon className="w-4" />
              Contact
            </li>
          </Link>
          <li className=" px-6 py-3 text-white  bg-orange-400 hover:bg-orange-600 rounded-xl cursor-pointer">
            <Link className="flex gap-2" to="/cart">
              <ShoppingBagIcon className="w-4" />
              Cart {cartItems.length ? <span>({cartItems.length})</span> : ""}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
