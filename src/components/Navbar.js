import { Link } from "react-scroll";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between p-5 md:px-32 px-5 bg-white border-b-[1px] border-solid border-black overflow-hidden">
        <div className="flex flex-row items-center cursor-pointer">
          <h1 className="font-semibold font-Pppins text-2xl">
            Restaurant Landing Page
          </h1>
        </div>
        <div className="hidden md:flex flex-row items-center text-lg font-semibold gap-8 ">
          <Link
            to="Landing"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-600 hover:text-black tansition-all cursor-pointer"
          >
            Landing
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Home
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Gallary
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Shop
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Blog
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            About
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Team
          </Link>
          <Link className="text-gray-600 hover:text-black tansition-all cursor-pointer">
            Contact
          </Link>
          <FaCartShopping size={32} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
