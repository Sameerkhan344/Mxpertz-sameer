import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="px-12 py-4 border-none  hover:bg-orange-400 hover:text-white transition-all tracking-wider font-bold rounded-md">
        {props.title}
      </button>
    </>
  );
};

export default Button;
