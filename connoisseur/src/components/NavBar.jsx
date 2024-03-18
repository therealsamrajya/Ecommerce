import { NavLink } from "react-router-dom";
import { navlogo } from "../assets/assets";

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
    id: 3,
    name: "Sports",
    link: "/sports",
  },
  {
    id: 5,
    name: "Groceries",
    link: "/groceries",
  },
];

const NavBar = () => {
  return (
    <div className="w-full bg-white sticky top-0  flex flex- items-center justify-center gap-7 ml-auto mt-3">
      <img src={navlogo} alt={navlogo} width={250} height={250} />
      <NavLink to="/"></NavLink>
      {menu.map((val) => (
        <NavLink
          key={val.id}
          to={val.link}
          className="text-primary uppercase font-bold text-xl hover:underline backdrop-blur-sm">
          {" "}
          {val.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
