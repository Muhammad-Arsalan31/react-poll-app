import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <ul className="h-10 bg-gray-400 flex justify-center items-center">
      <li>
        <NavLink
          className="px-3 py-3 mx-1 h-full"
          activeClassName="bg-indigo-300"
          exact
          to="/"
        >
          Polls
        </NavLink>
      </li>
      <li>
        <NavLink
          className="px-3 py-3 mx-1 h-full"
          activeClassName="bg-indigo-300"
          to="/addnewpoll"
        >
          Add New Poll
        </NavLink>
      </li>
    </ul>
  );
};
