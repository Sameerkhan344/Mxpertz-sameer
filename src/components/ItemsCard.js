import React from "react";
import Button from "./Layouts/Button";
import Cards from "./Layouts/Cards";
import bgImage1 from "../Asset/hero.avif";
import bgImage2 from "../Asset/hero.avif";

const ItemsCard = () => {
  const data = [
    {
      money: "$26.95",
      text: true,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",

      name: "",
    },
    {
      money: "$26.95",
      text: false,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage1,
    },
    {
      money: "$26.95",
      text: true,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: false,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: true,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: false,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: true,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: false,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
    {
      money: "$26.95",
      text: true,
      title: "Grilled Fillet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos id quas enim rerum vitae voluptates eligendi suscipit commodi totam ducimus? Dolorum magnam dolores unde. Eveniet libero nostrum aut ullam.",
      //   tag: {
      //     isOpen: true,
      //     // image: bgIage,
      //   },
      imagee: bgImage2,
    },
  ];
  return (
    <>
      <div className="relative min-h-screen w-full bg-black-900 text-white bg-black">
        <div className="min-h-fit flex flex-col justify-center items-center py-10 lg:px-20 md:px-20 leading-normal px-5 bg-gray-200 text-black">
          <div className="text-center w-full md:w-6/5 lg:w-3/5 xl:w-3/5 space-y-10 flex flex-col justify-center items-center">
            <span className="relative leading-3 cursor-pointer py-2">
              <h5 className="py-4 font-bold font-Poppins text-[20px] opacity-70 tracking-wider">
                ONLY THE BEST
              </h5>
              <div className="line w-20 h-0.5 bg-red-500 m-auto"></div>
            </span>
            <h1 className="max-md:text-4xl md:text-5xl font-Playfair  font-normal">
              Fresh Ingredient, Tasty Meals
            </h1>
            <p className="text-[17px] font-Poppins font-medium opacity-80 tracking-wider leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio eos vel eveniet quae sequi dolores explicabo, eum
              tempore debitis fugiat! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi, ratione et. Excepturi vitae adipisci
              itaque labore, laudantium commodi dignissimos rem.
            </p>
            <div className="flex flex-row gap-5 font-Poppins bg-orange-500 rounded-md text-white">
              <Button title="VIEW ITEMS" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-md:px-0 md:px-0 lg:px-10 xl:px-32 ">
          {data.map((item, index) => (
            <Cards key={index} itemData={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemsCard;
