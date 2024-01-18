import React from "react";
import Button from "./Layouts/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="relative min-h-screen  bg-[url('../public/Assets/hero.avif')] bg-cover bg-center bg-no-repeat w-full bg-black-900 text-white overflow-hidden">
        <div className="min-h-screen bg-black/70 flex items-center justify-center gap-32 max-md:gap-10 max-md:flex-col max-md:py-10 md:gap-10 md:flex-row md:py-10 ">
          <div className="leftCard w-[450px] h-[650px] rounded-md font-Playfair flex bg-[#181818] flex-col items-center text-center pt-20 leading-loose">
            <h1 className="text-xl pb-5">Hours of Operations</h1>
            <div className="font-Poppins">
              <span>MON - FRI</span> <br />
              10:00am - 1:00pm
              <br />
              10:00am - 1:00pm
            </div>
            <div className="line w-4/5 h-0.5 bg-orange-500 my-1"></div>
            <div className="font-Poppins">
              <span>SAT</span> <br />
              3:00pm - 10:30pm
              <br />
              10:00am - 1:00pm
            </div>
            <div className="line w-4/5 h-0.5 bg-orange-500 my-1"></div>
            <div className="font-Poppins">
              <span>SUN</span> <br />
              <span>We are closed</span>
            </div>
            <div className="flex-row gap-5 orange font-Poppins bg-orange-500 rounded-md w-fit leading-none mt-2">
              <Button title="MAKE A RESERVATION" />
            </div>
          </div>
          <div className="rightCard w-[450px] h-[650px] rounded-md font-Playfair flex bg-[#181818] flex-col items-center text-center pt-20 leading-loose">
            <h1 className="text-xl pb-5">Drop Us a Line</h1>
            <p className="font-Poppins my-3">
              Don't be shy.Let us Know if you have any question!
            </p>
            <div className="flex-row gap-5 font-Poppins bg-orange-500 rounded-md w-fit leading-none">
              <Button title="CONTACT US" />
            </div>
            <br />
            <h1 className="text-xl pb-5">Our Newsletter</h1>
            <p className="font-Poppins">
              Dialogue is an essential part of an script
            </p>
            <form className="w-9/12">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black rounded py-2 w-full px-2"
              />
              <br />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black rounded py-2 w-full my-3 px-2"
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                className="bg-black rounded py-2 w-full  px-2"
              />
              <div className="flex-row gap-5 font-Poppins bg-orange-500 rounded-md leading-none mt-5 w-full ">
                <Button title="CONTACT US" />
              </div>
            </form>
          </div>
        </div>
        <div className="bg-black flex justify-between items-center px-32 max-md:px-10 py-2 bg-[#151515] ">
          <div className="w-full px-4 max-md:px-0 py-6 sm:flex sm:items-center sm:justify-between opacity-6 ">
            <div className="flex text-gray-200 ">
              <h1>Designed by </h1>{" "}
              <span>
                <a href="#" className="font-bold">
                  {" "}
                  Elegant Theme
                </a>{" "}
                |{" "}
                <span>
                  Powered by{" "}
                  <a href="#" className="font-bold">
                    WordPress
                  </a>
                </span>
              </span>
            </div>

            <div className="mt-4 flex space-x-6">
              <a href="#">
                <FaFacebookF size={25} />{" "}
              </a>

              <a href="#">
                {" "}
                <FaTwitter size={25} />
              </a>
              <a href="#">
                <FaGooglePlusG size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
