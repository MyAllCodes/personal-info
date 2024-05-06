import { useState } from "react";
import './Navbar.css'
import {
  Link
} from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="flex items-center flex-wrap bg-black p-6 screen-size">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link to="/personal-info/home">Personal Info</Link>
        </span>
      </div>
      <div className={`block lg:hidden`}>
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-black hover:bg-white" onClick={toggleNavbar}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <Link to="/personal-info/home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mr-4">
            Home
          </Link>
          <Link to="/personal-info/contactUs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue mr-4">
            Contact Us
          </Link>
          <Link to="/personal-info/aboutUs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue">
            About Us
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}