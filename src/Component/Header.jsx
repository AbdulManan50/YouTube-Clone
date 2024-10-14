import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsMicFill } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 bg-black py-3">
        <div className="flex items-center gap-1 w-1/3">
          <div className="p-2 hover:bg-[#272727] rounded-full">
            <IoMenu className="text-white text-2xl" />
          </div>
          <img
            to="/"
            className="w-[15%] cursor-pointer"
            src="/public/Images/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center space-x-5 w-1/3">
          <div className="flex items-center">
            <div className="border-[1px] border-[#3D3D3D] rounded-l-full">
              <input
                type="text"
                placeholder="serch"
                className="font-Roboto w-[450px] bg-transparent placeholder-[#3D3D3D] outline-none text-white px-4 py-2"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
              />
            </div>
            <button
              className="px-3 py-2 bg-[#272727] rounded-r-full border-[1px] border-[#3D3D3D] hover:bg-[#3D3D3D]"
              onClick={() => searchQueryHandler("searchButton")}
            >
              <HiOutlineMagnifyingGlass className="text-white text-2xl" />
            </button>
          </div>
          <button className="p-3 bg-[#272727] rounded-full hover:bg-[#3D3D3D]">
            <BsMicFill className="text-white" />
          </button>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-5">
          <button className="p-2  rounded-full hover:bg-[#3D3D3D]">
            <MdVideoCall className="text-white text-2xl" />
          </button>
          <button className="p-2  rounded-full hover:bg-[#3D3D3D]">
            <IoMdNotificationsOutline className="text-white text-2xl" />
          </button>
          <div>
            <img
              className="w-[30px]"
              src="/public/Images/Abdulmanan.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
