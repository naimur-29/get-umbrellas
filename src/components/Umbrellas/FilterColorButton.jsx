import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FilterColorButton = ({
  filteredColors,
  setFilteredColors,
  bgColor,
  textColor,
  extraCss,
  money,
}) => {
  return (
    <button
      className={`font-bold border-[2px] bg-white text-${textColor} duration-100 ease-in-out transition-all active:scale-[1.1] shadow-md ${
        money && filteredColors.includes(bgColor) && "text-[#ffd700]"
      } ${money && " bg-black"} ${extraCss}`}
      onClick={() =>
        setFilteredColors(
          filteredColors.includes(bgColor)
            ? filteredColors.filter((e) => e !== bgColor)
            : [...filteredColors, bgColor]
        )
      }
    >
      {!money && filteredColors.includes(bgColor)
        ? `--${capitalizeFirstLetter(bgColor)}--`
        : money && filteredColors.includes(bgColor)
        ? bgColor
        : `${capitalizeFirstLetter(bgColor)}`}
    </button>
  );
};

export default FilterColorButton;
