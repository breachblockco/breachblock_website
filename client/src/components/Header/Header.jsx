import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IoMenu } from "react-icons/io5";
import { Drawer, IconButton } from "@mui/material";

function Header() {
  const redirectToLogin = (ref) => {
    window.location.href = "http://localhost:5173/auth/login";
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
          <Link
            to={"/"}
            className="text-[14px] poppins-family uppercase font-medium"
          >
            Home
          </Link>
          <Link
            className="text-[14px] poppins-family uppercase font-medium"
            to={"/courses"}
          >
            All Courses
          </Link>
          <Link
            to={"/services"}
            className="text-[14px] poppins-family uppercase font-medium"
          >
            Services
          </Link>
          <Link
            to={"/aboutus"}
            className="text-[14px] poppins-family uppercase font-medium"
          >
            About
          </Link>
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
          <Link onClick={redirectToLogin}>
            <Button btntext={"Login"} icon={true} color={"#000"} fs={"14px"} />
          </Link>
          <Link to={"/contactus"}>
            <Button
              btntext={"Let’s Brainstorm"}
              icon={false}
              color={"#096cd5"}
              fs={"14px"}
            />
          </Link>
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
          <Link
            to={"/"}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            Home
          </Link>
          <Link
            to={"/courses"}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            All Courses
          </Link>
          <Link
            to={"/services"}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            Services
          </Link>
          <Link
            to={"/aboutus"}
            className="text-[14px] poppins-family uppercase font-medium text-left"
          >
            About
          </Link>

          <Link
            to="/learnings"
            className="text-[14px] poppins-family uppercase font-medium leading-none"
          >
            My Learnings
          </Link>
          <Button btntext={"Login"} icon={true} color={"#000"} fs={"14px"} />
          <Link to={"/contactus"}>
            <Button
              btntext={"Let’s Brainstorm"}
              icon={false}
              color={"#096cd5"}
              fs={"14px"}
            />
          </Link>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
