import React from "react";
import NavMenu from "../ui/NavMenu";
import { Link } from "react-router";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavMenu to={"/"} className={" "}>
          Home
        </NavMenu>
      </li>
      <li>
        <NavMenu to={"/listed-books"} className={""}>
          Listed Books
        </NavMenu>
      </li>
      <li>
        <NavMenu to={"/pages-to-read"} className={""}>
          Pages to Read
        </NavMenu>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to={'/sign-in'} className="btn bg-green-500 text-white rounded-lg">Sign In</Link>
          <Link to={'/sign-up'} className="btn bg-cyan-500 text-white rounded-lg">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
