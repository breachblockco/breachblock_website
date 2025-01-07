import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IoMenu } from "react-icons/io5";
import {
  Drawer,
  IconButton,
} from "@mui/material";

function Header() {
  const scrollToSection = (ref) => {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div className="w-full sm:fixed sm:top-0 sm:left-0 sm:bg-white/20 sm:backdrop-blur-md sm:z-50 px-4 sm:px-24 lg:px-16">
      <div className="mx-auto flex h-[8vh] items-center flex-row-reverse sm:flex-row justify-between">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden bg-gray-400/10 backdrop-blur-md rounded-md">
          <IconButton onClick={toggleDrawer(true)} className="text-2xl">
            <IoMenu />
          </IconButton>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button
            className="text-[14px] poppins-family uppercase font-medium"
            onClick={() => scrollToSection("main")}
          >
            Home
          </button>
          <Link
            className="text-[14px] poppins-family uppercase font-medium"
            to={"/courses"}
          >
            All Courses
          </Link>
          <button
            className="text-[14px] poppins-family uppercase font-medium"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            className="text-[14px] poppins-family uppercase font-medium"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </div>

        {/* Logo */}
        <Link className="logo w-[50%] md:w-[15%] flex justify-center" to={"/"}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/learnings"
            className="text-[14px] poppins-family uppercase font-medium"
          >
            My Learnings
          </Link>
          <Button btntext={"Login"} icon={true} color={"#000"} fs={"14px"} />
          <Button
            btntext={"Let’s Brainstorm"}
            icon={false}
            color={"#096cd5"}
            fs={"14px"}
          />
        </div>
      </div>

      {/* MUI Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        className="md:hidden"
      >
        <div
          className="w-64 flex flex-col gap-4 p-4"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <button
            onClick={() => scrollToSection("main")}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            All Courses
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            About
          </button>

          <Link
            to="/learnings"
            className="text-[14px] poppins-family uppercase font-medium leading-none"
          >
            My Learnings
          </Link>
          <Button btntext={"Login"} icon={true} color={"#000"} fs={"14px"} />
          <Button
            btntext={"Let’s Brainstorm"}
            icon={false}
            color={"#096cd5"}
            fs={"14px"}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default Header;

