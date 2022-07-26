import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

import Title from "./Title";

const Navbar = () => {
  const [delivery, setDelivery] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center gap-0 md:gap-2 p-2 md:p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            size={30}
            className="mt-1 cursor-pointer"
            onClick={() => setMobile(true)}
          />
        </div>
        <Title />
        <div
          className="hidden lg:flex items-center bg-gray-200 rounded-full cursor-pointer p-1 select-none"
          onClick={() => setDelivery(!delivery)}
        >
          <p
            className={
              delivery ? "bg-black text-white rounded-full p-2 px-3" : "p-2"
            }
          >
            Delivery
          </p>
          <p
            className={
              !delivery ? "bg-black text-white rounded-full px-3 py-2" : "p-2"
            }
          >
            PickUp
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <div className="bg-gray-200 rounded-full  items-center px-2 w-[200px] sm:w-[350px] lg:w-[400px] hidden sm:flex">
          <AiOutlineSearch size={25} />
          <input
            className="w-full p-2 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Cart button*/}
        <button className="hidden lg:flex items-center gap-1 bg-black text-white rounded-full py-2 select-none">
          <BsFillCartFill size={20} /> Cart
        </button>

        {/* Mobile menu */}
        {mobile && (
          <div
            className={`bg-black/80 fixed w-full h-screen z-10 top-0 left-0`}
            onClick={() => setMobile(false)}
          ></div>
        )}

        {/* Side slider menu */}
        <div
          className={`fixed w-[300px] h-screen top-0 ${
            mobile ? "left-0" : "left-[-100%]"
          } bg-white z-10 duration-300 select-none`}
        >
          <div className="flex items-center justify-between p-4 mb-2">
            <Title
              mainClass={
                " text-[1.7rem] sm:text-[1.7rem] md:text-[1.7rem] lg:text-[1.7rem]"
              }
            />
            <AiOutlineClose
              size={30}
              className="cursor-pointer mt-1"
              onClick={() => setMobile(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 p-4 text-gray-800">
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <TbTruckDelivery size={25} /> Orders
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <MdFavorite size={25} /> Favorites
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <FaWallet size={25} /> Wallet
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <MdHelp size={25} /> Help
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <AiOutlineSearch size={25} /> Search
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <AiFillTag size={25} /> Promotions
            </li>
            <li className="flex items-center gap-4 p-2 text-xl cursor-pointer">
              <FaUserFriends size={25} /> Invite Friends
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
