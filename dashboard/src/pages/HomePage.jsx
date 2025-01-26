import React, { useEffect, useRef, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import SalesChart from "../components/SalesChart";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedMonth, setSelectedMonth] = useState("September");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeDropdown);
    }
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isOpen]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

   const users = [
     {
       name: "Vedant Chaudhary",
       email: "vedant@example.com",
       course: "Web Development",
       status: "Active",
     },
     {
       name: "Sarah Parker",
       email: "sarah.parker@example.com",
       course: "Data Science",
       status: "Inactive",
     },
     {
       name: "John Doe",
       email: "john.doe@example.com",
       course: "UI/UX Design",
       status: "Active",
     },
     {
       name: "Emily Watson",
       email: "emily.watson@example.com",
       course: "Cybersecurity",
       status: "Active",
     },
     {
       name: "Mark Robinson",
       email: "mark.robinson@example.com",
       course: "Cloud Computing",
       status: "Inactive",
     },
   ];

  return (
    <>
      <h1 className="text-white text-4xl font-medium">Dashboard</h1>
      <div className="flex gap-5 justify-start w-full">
        <div className="w-[19vw] h-[23vh] bg-[#273142] p-4 rounded-2xl border-[1px] border-zinc-300/20 flex flex-col justify-between relative">
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-300/90 text-xl">Total Users</h4>
            <h2 className="text-4xl text-white font-medium">40,212</h2>
          </div>
          <div className="flex items-center ">
            <FaArrowTrendUp size={25} className="text-[#02ae95]" />
            <h5 className="text-white">
              <span className="text-[#02ae95] mr-1.5">8.5%</span>
              Up from yesterday
            </h5>
          </div>
          <div className="w-15 h-15 absolute bg-[#7474e1] right-5 rounded-2xl flex items-center justify-center text-white">
            <FaUsers size={40} />
          </div>
        </div>
        <div className="w-[19vw] h-[23vh] bg-[#273142] p-4 rounded-2xl border-[1px] border-zinc-300/20 flex flex-col justify-between relative">
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-300/90 text-xl">Enrolled Students</h4>
            <h2 className="text-4xl text-white font-medium">1027</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowTrendUp size={25} className="text-[#02ae95]" />
            <h5 className="text-white">
              <span className="text-[#02ae95] mr-1.5">8.5%</span>
              Up from yesterday
            </h5>
          </div>
          <div className="w-15 h-15 absolute bg-[#deaf3e] right-5 rounded-2xl flex items-center justify-center text-white">
            <GoPackage size={40} />
          </div>
        </div>
        <div className="w-[19vw] h-[23vh] bg-[#273142] p-4 rounded-2xl border-[1px] border-zinc-300/20 flex flex-col justify-between relative">
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-300/90 text-xl">Total Sales</h4>
            <h2 className="text-4xl text-white font-medium">₹2.5M</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowTrendUp size={25} className="text-[#02ae95]" />
            <h5 className="text-white">
              <span className="text-[#02ae95] mr-1.5">8.5%</span>
              Up from yesterday
            </h5>
          </div>
          <div className="w-15 h-15 absolute bg-[#44be84] right-5 rounded-2xl flex items-center justify-center text-white">
            <GiReceiveMoney size={40} />
          </div>
        </div>
        <div className="w-[19vw] h-[23vh] bg-[#273142] p-4 rounded-2xl border-[1px] border-zinc-300/20 flex flex-col justify-between relative">
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-300/90 text-xl">Enrolled Students</h4>
            <h2 className="text-4xl text-white font-medium">40,212</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowTrendUp size={25} className="text-[#02ae95]" />
            <h5 className="text-white">
              <span className="text-[#02ae95] mr-1.5">8.5%</span>
              Up from yesterday
            </h5>
          </div>
          <div className="w-15 h-15 absolute bg-[#deaf3e] right-5 rounded-2xl flex items-center justify-center text-white">
            <GoPackage size={40} />
          </div>
        </div>
      </div>
      <div className="w-full border-[1px] border-zinc-300/20 rounded-2xl p-7 bg-[#273142]">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl text-white font-medium">User Details</h4>
          <div
            className="relative px-7 py-2 rounded-xl flex items-center gap-2 text-white bg-[#323d4e] cursor-pointer"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <h5 className="text-md">{selectedMonth}</h5>
            <IoIosArrowDown size={20} />
            {isOpen && (
              <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-50 top-10 right-0 h-[30vh] overflow-y-auto months-dropdown">
                {months.map((month, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-100 rounded-lg transition-all duration-200 cursor-pointer"
                    onClick={() => {
                      setSelectedMonth(month); // Update the selected month
                      closeDropdown(); // Close dropdown
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <table className="w-full text-left border-collapse mt-5 rounded-xl">
          <thead className="bg-gray-800 text-white rounded-xl">
            <tr>
              <th className="px-6 py-3 text-sm font-medium uppercase">Name</th>
              <th className="px-6 py-3 text-sm font-medium uppercase">Email</th>
              <th className="px-6 py-3 text-sm font-medium uppercase">
                Course Name
              </th>
              <th className="px-6 py-3 text-sm font-medium uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#313c4d] divide-y divide-gray-900 transition-all duration-300">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-zinc-300/10">
                <td className="px-6 py-4 text-zinc-300/90">{user.name}</td>
                <td className="px-6 py-4 text-zinc-300/90">{user.email}</td>
                <td className="px-6 py-4 text-zinc-300/90">{user.course}</td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    user.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <SalesChart />
      </div>
    </>
  );
}

export default HomePage;
