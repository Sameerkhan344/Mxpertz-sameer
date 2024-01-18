import React from "react";
import Button from "./Layouts/Button";

const Home = () => {
  return (
    <div className="relative min-h-screen  bg-[url('../public/Assets/hero.avif')] bg-cover bg-center bg-no-repeat w-full bg-black-900 text-white">
      <div className="min-h-screen bg-black/70 flex flex-col justify-center items-center lg:px-20 md:px-20 leading-normal px-5">
        <div className="text-center w-full md:w-6/5 lg:w-6/5 xl:w-6/12 space-y-20 flex flex-col justify-center items-center">
          <h1 className="max-md:text-4xl md:text-7xl lg:text-7xl font-Playfair  font-normal">
            Only Quality Food
          </h1>
          <p className="text-[17px] max-md:text-[15px] font-Poppins font-medium opacity-80 tracking-wider leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            eos vel eveniet quae sequi dolores explicabo, eum tempore debitis
            fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi, ratione et. Excepturi vitae adipisci itaque labore,
            laudantium commodi dignissimos rem.
          </p>
          <div className="flex flex-row gap-5 font-Poppins max-md:flex-col">
            <div className="border-2 border-white">
              <Button title="VIEW MENU" />
            </div>
            <div className="border-2 border-white">
              <Button title="RESERVATION" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
