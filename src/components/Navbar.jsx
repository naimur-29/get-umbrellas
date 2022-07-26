import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const [delivery, setDelivery] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center gap-0 md:gap-2 p-2 md:p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Get <span className="font-bold">Umbrellas</span>
        </h1>
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
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[350px] lg:w-[400px]">
          <AiOutlineSearch size={25} />
          <input
            className="w-full p-2 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Cart button*/}
        <button className="hidden lg:flex items-center gap-1 bg-black text-white rounded-full py-2">
          <BsFillCartFill size={20} /> Cart
        </button>
      </div>
    </div>
  );
};

export default Navbar;
