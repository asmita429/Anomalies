import React from "react";
import Groundup from "../assets/Groundup.png";
import { GoGear } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <nav className="w-auto h-[53px] border-b-[1px] border-bottom flex justify-between items-center text-center bg-white">
      <div className="flex justify-between items-center text-sm font-sans">
        <img src={Groundup} className="w-[164px] m-4" alt="logo" />

        <ul className="flex text-dashboard h-[51px] items-center">
          <li className="w-[91px]">DASHBOARD</li>
          <li className="w-[91px] bg-active p-4 border-b-[3px] border-activeB">
            ALERTS
          </li>
        </ul>
      </div>
      <div className="flex items-center text-sm font-sans text-dashboard gap-4 mr-5">
        <GoGear className="h-5 w-5" />

        <FaRegUser />

        <Badge badgeContent={3} color="primary">
          <IoIosNotificationsOutline className="h-5 w-5" />
        </Badge>
        <span className="text-[25px]">|</span>
        <span className="text-xl">Welcome Admin!</span>
      </div>
    </nav>
  );
};

export default Navbar;
