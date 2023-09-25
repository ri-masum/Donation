import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="w-full p-2">
        <nav className="flex justify-between w-11/12 mx-auto items-center ">
            <Logo></Logo>
          <ul className="flex gap-5 font-semibold">
            <li>
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-500 underline" : ""
                }
              >
                Home
              </NavLink>
            
            </li>
            <li>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-500 underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/statistic"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-pink-500 underline" : ""
                }
              >
                Statistic
              </NavLink>
            </li>
          </ul>
          
        </nav>
      </div>
    );
};

export default Navbar;