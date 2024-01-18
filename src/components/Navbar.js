import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between p-5 md:px-2 lg:px-6 xl:px-12 px-5 bg-white border-b-[1px] border-solid border-black overflow-hidden">
        <div className="flex flex-row items-center cursor-pointer">
          <h1 className="font-semibold font-Pppins max-md:text-xl md:text-2xl">
            Restaurant Landing Page
          </h1>
        </div>
        <div className="hidden lg:flex flex-row items-center text-lg font-semibold gap-8 ">
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Landing
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Gallary
          </a>
          <a className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Shop
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Contact
          </a>
          <FaCartShopping size={32} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
