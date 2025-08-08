import { NavLink } from "react-router";
import { ModeToggle } from "../mode-toggle";


export default function Navbar() {

  const links = <>

    <li><NavLink to='/' className="hover:text-green-500">Home</NavLink></li>
    <li><a href="#about" className="hover:text-green-500">About</a></li>
    <li><a href="#services" className="hover:text-green-500">Services</a></li>
    <li><NavLink to="/portfolio" className="hover:text-green-500">Portfolio</NavLink></li>
    <li><NavLink to="/team" className="hover:text-green-500">Our Team</NavLink></li>
    <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
    <li><NavLink to="/work" className="hover:text-green-500">Our Work Process</NavLink></li>
    <li><a href="https://calendly.com/ashikuzzamaan-rokon/45min?month=2025-08" className="hover:text-green-500">Fixed a Meeting</a></li>


  </>



  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/xRyJcLg/78d8973a-2ada-4366-ac7f-02935cef8f82.jpg"
            alt="Creova Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-lg md:text-xl font-semibold tracking-wide text-gray-800 dark:text-white">
            Creova
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ModeToggle />
        <div className="ml-1 hidden md:inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <a
            href="#contact"
            className="block px-3 py-1 rounded-full bg-white dark:bg-black font-medium hover:shadow transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </div>
  )
}
