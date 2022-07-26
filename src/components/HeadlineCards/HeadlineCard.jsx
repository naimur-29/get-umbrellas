import React from "react";

const HeadlineCard = ({ bgImgSource, price, title }) => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">Only {price}$</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Get Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
        src={bgImgSource}
        alt="something related to umbrellas"
      />
    </div>
  );
};

export default HeadlineCard;
