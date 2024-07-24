import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaUser } from "react-icons/fa";
import { navlogo } from "../assets/assets";
import Button from "./Button";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial window size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center flex-wrap  gap-x-6 border sticky top-0 z-50 bg-tertiary font-merriweather-regular uppercase">
      <div className="flex flex-row gap-7 justify-between items-center">
        <img
          id="logo"
          className="ml-4 "
          src={navlogo}
          alt={navlogo}
          width={250}
          height={250}
        />
        {isMobile ? (
          <button onClick={toggleMenu} className="text-text">
            <FaBars className=" ml-[6rem] h-6 w-6" />
          </button>
        ) : (
          <div className="flex items-center gap-7 ">
            <NavLink
              className="hover:text-hover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              to="/">
              Home
            </NavLink>
            <NavLink
              className="hover:text-hover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              to="/mensfashion">
              Men's Fashion
            </NavLink>
            <NavLink
              className="hover:text-hover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              to="/womensfashion">
              Women's Fashion
            </NavLink>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 "
            />
            <button className="bg-secondary text-tertiary rounded-md px-1 py-2 lg:ml-[-2rem] ">
              <FaSearch className="h-6 w-6 " />
            </button>
            <div className="px-2 space-x-2 flex items-center">
              <Button
                to="/signup"
                value="Sign Up"
                className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-primary  max-sm:text-sm max-sm:px-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"></Button>
              <div className="lg:px-3">
                <Button
                  to="/login"
                  value="Login"
                  className="bg-secondary text-tertiary px-5 py-3 rounded-sm shadow-lg hover:bg-primary  max-sm:text-sm max-sm:px-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"></Button>
              </div>
            </div>
            <NavLink to="/addtocart">
              <IoMdCart className="w-[2rem] h-6" />
            </NavLink>
          </div>
        )}
      </div>
      {showMenu && isMobile && (
        <div className=" text-primaryv items-center ml-[3rem] text-2xl p-4">
          <div className="flex flex-col gap-4 items-center">
            <NavLink
              className="hover:text-hover text-center"
              to="/"
              onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink
              className="hover:text-hover text-center"
              to="/mensfashion"
              onClick={toggleMenu}>
              Mens's Fashion
            </NavLink>
            <NavLink
              className="hover:text-hover text-center"
              to="/Womensfashion"
              onClick={toggleMenu}>
              Women's Fashion
            </NavLink>
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l-lg px-3 py-1 focus:outline-none focus:border-blue-500"
              />
              <button className="  bg-secondary text-tertiary rounded-r-md px-1 py-1">
                <FaSearch className="h-8 w-6 " />
              </button>
            </div>
            <div className="px-2 space-x-2 flex items-center">
              <Button
                to="/signup"
                value="Sign Up"
                className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-primary m max-sm:text-sm max-sm:px-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"></Button>
              <div className="lg:px-3">
                <Button
                  to="/login"
                  value="Login"
                  className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-primary flex items-center  max-sm:text-sm max-sm:px-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"></Button>
              </div>
            </div>
            <NavLink to="/addtocart">
              <IoMdCart className="w-[2rem] h-6" />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
