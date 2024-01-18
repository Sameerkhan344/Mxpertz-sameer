import React from "react";

const Cards = ({ itemData }) => {
  return (
    <>
      <div className="text-black w-4/12 max-md:w-6/12 h-[400px] text-center leading-medium overflow-hidden bg-white ">
        {itemData.text ? (
          <div className="py-[4em] px-2">
            <h2 className="text-orange-500 font-medium text-[30px]">
              {itemData.money}
            </h2>
            <h1 className="py-4 font-medium font-Playfair text-[30px]">
              {itemData.title}
            </h1>
            <p className="font-gilroy font-semibold tracking-[1.2px] opacity-70 text-[19px]">
              {itemData.desc}
            </p>
            <p className="mt-5 text-[25px] font-gilroy font-semibold tracking-[1.2px] opacity-90">
              {itemData.name}
            </p>
          </div>
        ) : (
          <div>
            <img
              src={itemData.imagee}
              alt=""
              //   height={"100%"}
              className="bg-cover bg-center bg-no-repeat h-[400px]"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
