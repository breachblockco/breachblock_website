import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Navigate, Outlet } from "react-router";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to={"/auth/login"} replace />;
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    // Close the dropdown if the click is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach click event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", closeDropdown);
    }

    // Cleanup event listener on unmount or when dropdown is closed
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);
  return (
    <div className="w-full h-screen bg-zinc-500">
      <div className="h-[72px] w-full bg-[#273142] px-10 flex justify-between items-center">
        <div className="w-[20%] ">
          <h3 className="text-2xl uppercase orbitron-family font-semibold text-white">
            breachblock co.
          </h3>
        </div>
        <div className="flex gap-5 text-white justify-center items-center poppins-family relative">
          <div className="w-11 h-11 rounded-full bg-red-300">
            <img
              src="/images/useravatar.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-md font-medium">Vedant Chaudhary</h5>
            <p className="text-sm">Admin</p>
          </div>
          <div
            className="w-6 h-6 rounded-full border-[1px] border-white flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <IoIosArrowDown />
          </div>
          {isOpen && (
            <div className="absolute right-0 top-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50 font-medium transition-all duration-300">
              <button
                className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-blue-100 rounded-lg"
                onClick={() => console.log("Logout clicked")}
              >
                Profile
              </button>
              <button
                className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-blue-100 rounded-lg"
                onClick={() => console.log("Logout clicked")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="w-[20vw] h-[calc(100vh-72px)] bg-[#273142] px-6 py-3 text-white poppins-family flex flex-col gap-1">
          <Link
            to={"/dashboard/home"}
            className="py-3 px-16 rounded-lg text-lg hover:bg-zinc-300/10 transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            to={"/dashboard/courses"}
            className="py-3 px-16 rounded-lg text-lg hover:bg-zinc-300/10 transition-all duration-300"
          >
            Courses
          </Link>
          <Link
            to={"/dashboard/favourites"}
            className="py-3 px-16 rounded-lg text-lg hover:bg-zinc-300/10 transition-all duration-300"
          >
            Favourites
          </Link>
        </div>
        <div className="h-[calc(100vh-72px)] w-full bg-[#1b2431] overflow-y-auto flex flex-col gap-10 px-5 py-4 poppins-family main-part">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
