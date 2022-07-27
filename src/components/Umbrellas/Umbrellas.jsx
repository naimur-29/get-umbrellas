import React, { useState, useEffect } from "react";

import { UmbrellasData } from "../../data/UmbrellasData";
import Filtering from "./Filtering";

const Umbrellas = () => {
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredUmbrellas, setFilteredUmbrellas] = useState([]);

  useEffect(() => {
    let arr = [];

    // Filtered By Colors
    filteredColors.forEach((color) => {
      arr = [
        ...arr,
        ...UmbrellasData.filter(
          (umbrella) => umbrella.color === color && !arr.includes(umbrella)
        ),
      ];
    });

    setFilteredUmbrellas(arr.length ? arr : UmbrellasData);
    console.log(filteredColors);
  }, [filteredColors]);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black font-bold text-4xl text-center mb-8">
        Top Rated Products
      </h1>

      <Filtering
        filteredColors={filteredColors}
        setFilteredColors={setFilteredColors}
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {filteredUmbrellas.map((item) => (
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
