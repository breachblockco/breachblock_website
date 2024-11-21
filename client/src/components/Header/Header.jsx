import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="w-full py-6 flex h-[8vh] items-center justify-between">
      <div className="header-part-1 flex items-center gap-10">
        <Link className="text-[14px] poppins-family uppercase font-medium">
          Home
        </Link>
        <Link className="text-[14px] poppins-family uppercase font-medium">
          all courses
        </Link>
        <Link className="text-[14px] poppins-family uppercase font-medium">
          services
        </Link>
        <Link className="text-[14px] poppins-family uppercase font-medium">
          about
        </Link>
      </div>
      <div className="logo w-[15vw]">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="header-part-2 flex items-center gap-10">
        <Link className="text-[14px] poppins-family uppercase font-medium">
          my learnings
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
  );
}

export default Header;
