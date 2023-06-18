//eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "global/Button";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex justify-between items-center w-full h-20 lg:h-24 p-4 fixed top-0 left-0 ${isSidebarOpen ? "bg-white" : "bg-white"} shadow-md`}>
      {/* Logo */}
      <div className={`lg:w-[150px] lg:h-[51.52px] flex justify-center items-center p-0 text-xs cursor-pointer ${isSidebarOpen ? "w-[37px] h-[33.39px] bg-[url('assets/logo-icon-blue.svg')]" : "w-[80px] h-[33.39px] bg-[url('assets/full-logo-blue.svg')]"} lg:bg-[url('assets/full-logo-blue.svg')] bg-left bg-contain bg-no-repeat`} />

      {/* Burger Icons */}
      <div className={`w-6 h-6 ${isSidebarOpen ? "bg-[url('assets/close-icon.svg')]" : "bg-[url('assets/burger-menu.svg')]"} bg-contain bg-no-repeat flex justify-center items-center text-center p-0 cursor-pointer [-webkit-tap-highlight-color:transparent] lg:hidden`} role="button" onClick={() => setIsSidebarOpen(state => !state)} />

      {/* Menu Links */}
      <div className={`text-[16px] font-semibold flex-col lg:flex-row justify-center items-center gap-8 text-center [font-variant:small-caps] w-screen lg:w-fit h-[calc(100vh-5rem)] lg:h-min bg-stone-200 lg:bg-transparent p-0 absolute lg:static top-20 left-0 ${isSidebarOpen ? "flex bg-white" : "hidden lg:flex bg-white"}`}>
        {
          /* Navlink names and URLs */
          [
            ["Home", "/"],
            ["Rent to Own?", "/what-is-rent-to-own"],
            ["About Us", "/about-us"],
            ["Faq", "/faq"],
            ["Apply Now", "/apply-now"],
            ["Investment", "/partner-with-us"],
          ].map((link, id) => (
            <NavLink
              to={link[1]}
              key={id}
              className={
                ({ isActive, isPending }) =>
                  isActive
                  ? "border-b-2 border-b-brown-primary px-1"
                  : isPending
                  ? "pending"
                  : ""
              }
              onClick={() => setIsSidebarOpen(state => !state)}
            >
              {link[0]}
            </NavLink>
          ))
        }
      </div>

      <div className="hidden lg:flex gap-5">
        <Button theme="secondary" isNavbarButton={true}>
          Contact Us
        </Button>

        <Link to="/apply-now">
          <Button theme="primary" isNavbarButton={true}>
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

