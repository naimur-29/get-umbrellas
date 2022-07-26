import React from "react";

const Title = ({ mainClass, spanClass }) => {
  return (
    <h1 className={"text-3xl lg:text-4xl px-2 select-none " + mainClass}>
      Get <span className={"font-bold " + spanClass}>Umbrellas</span>
    </h1>
  );
};

export default Title;
