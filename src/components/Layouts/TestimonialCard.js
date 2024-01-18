import React from "react";

const TestimonialCard = ({ itemData }) => {
  return (
    <>
      <div className="text-black w-4/12 h-[400px] text-left leading-medium overflow-hidden bg-white">
        {itemData.text ? (
          <div className="py-[4em] px-2">
            <h2 className="text-orange-500 font-medium text-[30px]">
              {itemData.star}
            </h2>
            <blockquote>
              <h1 className="py-4 font-medium font-Playfair text-[30px]">
                "{itemData.title}"
              </h1>
            </blockquote>
            <blockquote className="font-gilroy font-semibold tracking-[1.2px] opacity-70 text-[19px]">
              <p>"{itemData.desc}"</p>
            </blockquote>

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

export default TestimonialCard;
