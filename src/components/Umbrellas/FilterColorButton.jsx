import React from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FilterColorButton = ({
  filteredColors,
  setFilteredColors,
  trait,
  text,
  textColor,
  extraCss,
  money,
}) => {
  return (
    <button
      className={`font-bold border-[2px] bg-white text-${textColor} duration-100 ease-in-out transition-all active:scale-[1.1] shadow-md ${extraCss}`}
      onClick={() =>
        setFilteredColors(
          filteredColors.includes(trait)
            ? filteredColors.filter((e) => e !== trait)
            : [...filteredColors, trait]
        )
      }
    >
      {!money && filteredColors.includes(trait)
        ? `--${capitalizeFirstLetter(text)}--`
        : `${capitalizeFirstLetter(text)}`}
    </button>
  );
};

export default FilterColorButton;
