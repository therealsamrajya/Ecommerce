import { NavLink } from "react-router-dom";
import { navlogo } from "../assets/assets";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const menu = [
  {
    id: 1,
    name: "Electronics",
    link: "/electronics",
  },
  {
    id: 2,
    name: "Health & Beauty",
    link: "/health",
  },
  {
    id: 3,
    name: "Men's Fashion",
    link: "/mensfashion",
  },
  {
    id: 4,
    name: "Women's Fashion",
    link: "/womensfashion",
  },
  {
    id: 5,
    name: "Sports",
    link: "/sports",
  },
  {
    id: 6,
    name: "Groceries",
    link: "/groceries",
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
    </div>
  );
};

export default NavBar;
