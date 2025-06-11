import { NavLink } from "react-router";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="bg-secondary py-6 text-white relative">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div>
          <span className="text-2xl font-semibold font-bitter">Confident</span>
        </div>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Some</NavLink>
          </li>
          <li>
            <NavMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
