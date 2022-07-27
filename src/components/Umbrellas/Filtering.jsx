import React from "react";

import FilterColorButton from "./FilterColorButton";

const Filtering = ({ filteredColors, setFilteredColors }) => {
  return (
    <div className="flex flex-col justify-between gap-3 items-center">
      {/* Filter By Color */}
      <p className="font-bold text-2xl text-gray-700">Filter By Color</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"red"}
          trait={"red"}
          textColor={"white"}
          extraCss={"bg-red-600"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"blue"}
          trait={"blue"}
          textColor={"white"}
          extraCss={"bg-blue-600"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"gray"}
          trait={"gray"}
          textColor={"white"}
          extraCss={"bg-gray-600"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"cyan"}
          trait={"cyan"}
          textColor={"white"}
          extraCss={"bg-cyan-600"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"white"}
          trait={"white"}
          textColor={"black"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"black"}
          trait={"black"}
          textColor={"white"}
          extraCss={"bg-black/90"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"green"}
          trait={"green"}
          textColor={"white"}
          extraCss={"bg-green-500"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"cream"}
          trait={"cream"}
          textColor={"black"}
          extraCss={"bg-[#fffdd0]"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"violet"}
          trait={"violet"}
          textColor={"white"}
          extraCss={"bg-violet-600"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"orange"}
          trait={"orange"}
          textColor={"white"}
          extraCss={"bg-orange-500"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"yellow"}
          trait={"yellow"}
          textColor={"black"}
          extraCss={"bg-yellow-300"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"transparent"}
          trait={"transparent"}
          textColor={"black"}
        />
        <FilterColorButton
          filteredColors={filteredColors}
          setFilteredColors={setFilteredColors}
          text={"rainbow"}
          trait={"rainbow"}
          textColor={"black"}
        />
      </div>
    </div>
  );
};

export default Filtering;
