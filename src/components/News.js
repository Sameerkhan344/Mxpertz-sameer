import React from "react";
import NewsCard from "./Layouts/NewsCard";
import bgImage1 from "../Asset/hero.avif";
import Button from "./Layouts/Button";

const News = () => {
  const newData = [
    {
      imagee: bgImage1,

      cat: "CATEGORY",

      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
    },
    {
      cat: "CATEGORY",

      imagee: bgImage1,

      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
    },
    {
      cat: "CATEGORY",

      imagee: bgImage1,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
    },
  ];
  return (
    <div className="relative h-fit w-full bg-black-900 text-white bg-gray-200 py-32">
      <div className="flex flex-col justify-center items-center py-10 lg:px-20 md:px-20 leading-normal px-5 text-black">
        <div className="text-center w-full md:w-6/5 lg:w-6/5 xl:w-6/12 space-y-10 flex flex-col justify-center items-center">
          <span className="relative leading-3 cursor-pointer py-2">
            <h5 className="py-4 font-bold font-Poppins text-[20px] opacity-70 tracking-wider">
              DON'T MISS
            </h5>
            <div className="line w-20 h-0.5 bg-red-500 m-auto"></div>
          </span>
          <h1 className="text-5xl font-Playfair  font-normal">
            Our News And Events
          </h1>
          <p className="text-[17px] font-Poppins font-medium opacity-80 tracking-wider leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            eos vel eveniet quae sequi dolores explicabo, eum tempore debitis
            fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi, ratione et.
          </p>
        </div>
      </div>
      <div className="h-fit flex flex-wrap max-md:px-12 md:px-10 lg:px-32">
        {newData.map((item, index) => (
          <NewsCard key={index} itemData={item} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex-row gap-5 font-Poppins bg-orange-500 rounded-md w-fit ">
          <Button title="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default News;
