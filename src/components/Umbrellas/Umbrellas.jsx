import React, { useState } from "react";

import { UmbrellasData } from "../../data/UmbrellasData";
import FilterColorButton from "./FilterColorButton";

const Umbrellas = () => {
  const [filteredColors, setFilteredColors] = useState([]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black font-bold text-4xl text-center mb-8">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between gap-3 items-center">
        {/* Filter Color */}
        <p className="font-bold text-2xl text-gray-700">Filter By Color</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"red"}
            textColor={"white"}
            extraCss={"bg-red-600"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"blue"}
            textColor={"white"}
            extraCss={"bg-blue-600"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"gray"}
            textColor={"white"}
            extraCss={"bg-gray-600"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"cyan"}
            textColor={"white"}
            extraCss={"bg-cyan-600"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"white"}
            textColor={"black"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"black"}
            textColor={"white"}
            extraCss={"bg-black/90"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"green"}
            textColor={"white"}
            extraCss={"bg-green-500"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"cream"}
            textColor={"black"}
            extraCss={"bg-[#fffdd0]"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"violet"}
            textColor={"white"}
            extraCss={"bg-violet-600"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"orange"}
            textColor={"white"}
            extraCss={"bg-orange-500"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"yellow"}
            textColor={"black"}
            extraCss={"bg-yellow-300"}
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"transparent"}
            textColor={"black"}
          />
        </div>

        {/* Filter Price*/}
        <p className="font-bold text-gray-700 text-2xl">Filter By Price</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"1$ - 50$"}
            textColor={"white"}
            money
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"51$ - 100$"}
            textColor={"white"}
            money
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"101$ - 150$"}
            textColor={"white"}
            money
          />
          <FilterColorButton
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            bgColor={"151$ - 200$"}
            textColor={"white"}
            money
          />
        </div>
      </div>

      {/* Umbrella Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {UmbrellasData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between border rounded-lg shadow-lg sm:hover:scale-105 duration-300 ease-in-out"
          >
            <img
              className="w-full h-[150px] sm:h-[200px] object-cover rounded-t-lg"
              src={item.img}
              alt={"some sort of umbrella with a person holding it"}
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-between px-2 pt-4 pb-2">
              <p className="text-center sm:text-left text-lg text-gray-700">
                {item.name}
              </p>
              <p className="text-center font-bold">
                <span className="inline-block w-full bg-blue-500 rounded-lg p-2 text-white">
                  {item.price}.99$
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Umbrellas;
