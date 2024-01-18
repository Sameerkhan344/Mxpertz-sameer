import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="px-6 md:px-12 py-2  md:py-4 w-full border-none  hover:bg-orange-400 hover:text-white transition-all tracking-wider font-bold rounded-md">
        {props.title}
      </button>
    </>
  );
};

export default Button;
