import React from "react";

const NewsCard = ({ itemData }) => {
  return (
    <>
      <div className="text-black w-4/12 h-fit text-left leading-medium overflow-hidden gap-5 flex flex-col">
        <div className="py-[4em] px-2 h-fit">
          <div>
            <img
              src={itemData.imagee}
              alt=""
              //   height={"100%"}
              className="bg-cover bg-center bg-no-repeat w-4/5 h-[250px]"
            />
          </div>
          <h1 className="py-4 font-medium font-Playfair text-[30px]">
            {itemData.title}
          </h1>
          <p className="text-[15px] font-gilroy font-semibold tracking-[1.2px] opacity-90 text-orange-500">
            {itemData.cat}
          </p>
          <p className="font-gilroy font-semibold tracking-[1.2px] opacity-70 text-[16px] w-9/12">
            {itemData.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
