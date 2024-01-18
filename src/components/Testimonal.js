import React from "react";
import Testimonial from "./Layouts/TestimonialCard";
import { Button } from "react-scroll";

const Testimonal = () => {
  const Testidata = [
    {
      star: "⭐⭐⭐⭐⭐",
      text: true,
      title: "A Great Finder",
      desc: "Lorem ipsum dolor sit amet consectetur magnam dolores unde. Eveniet libero nostrum aut ullam.",
      name: "sameer",
    },
    {
      star: "⭐⭐⭐⭐⭐",

      text: true,
      title: "Fabulous food & flawless service",
      desc: "Lorem ipsum dolor sit amet consectetur magnam dolores unde. Eveniet libero nostrum aut ullam.",
      name: "same",
    },
    {
      star: "⭐⭐⭐⭐⭐",

      text: true,
      title: "Another successfuk experience",
      desc: "Lorem ipsum dolor sit amet consectetur magnam dolores unde. Eveniet libero nostrum aut ullam.",
      name: "Rahul",
    },
    {
      star: "⭐⭐⭐⭐⭐",

      text: true,
      title: "Speechless",
      desc: "Lorem ipsum dolor sit amet consectetur magnam dolores unde. Eveniet libero nostrum aut ullam.",
      name: "Shah",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:px-20 md:px-20 leading-normal px-5 py-32 h-fit overflow-hidden">
        <div className="text-center w-full md:w-6/5 lg:w-6/5 xl:w-6/12 space-y-2 flex flex-col justify-center items-center">
          <span className="leading-3 cursor-pointer">
            <h5 className="py-4 font-bold font-Poppins text-[20px] opacity-70 tracking-wider">
              TESTIMONIAL
            </h5>
            <div className="line w-20 h-0.5 bg-red-500 m-auto"></div>
          </span>
          <h1 className="text-5xl font-Playfair  font-normal pt-5">
            What People are Saying
          </h1>
        </div>
        <div className="flex flex-wrap min-h-[60vh] mt-5">
          <div className="bg-white-500 flex px-32 gap-10 text-left">
            {Testidata.map((item, index) => (
              <Testimonial key={index} itemData={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonal;
