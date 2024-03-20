import { NavLink } from "react-router-dom";
import { navlogo } from "../assets/assets";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaUser } from "react-icons/fa";
import Button from "./Button";

const menu = [
  {
    id: 1,
    name: "Men's Fashion",
    link: "/mensfashion",
  },
  {
    id: 2,
    name: "Women's Fashion",
    link: "/womensfashion",
  },
  {
    id: 3,
    name: "Sports",
    link: "/sports",
  },
];

const NavBar = () => {
  return (
    <div className="flex items-center flex-wrap  gap-x-6 border sticky top-0 z-50 bg-tertiary">
      <button className="lg:hidden">
        <IoMdMenu className=" ml-3 w-5 h-5" aria-hidden="true" />
      </button>

      <NavLink to="/">
        <img
          className="ml-4"
          src={navlogo}
          alt={navlogo}
          width={250}
          height={250}
        />
      </NavLink>

      {menu.map((val) => (
        <NavLink
          className=" max-md:hidden text-primary font-semibold uppercase hover:text-secondary"
          key={val.id}
          to={val.link}>
          {val.name}
        </NavLink>
      ))}
      <div className="flex ml-8 ">
        <div className=" flex items-center max-sm:ml-[-2rem]">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500  "
          />
          <button className="bg-secondary text-tertiary rounded-r-md px-4 py-2">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 space-x-2 flex items-center">
          <Button
            value="Sign Up"
            className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-primary m max-sm:text-sm max-sm:px-2 "></Button>
          <div className="lg:px-3">
            <button className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-primary flex items-center  max-sm:text-sm max-sm:px-2 ">
              <FaUser className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
