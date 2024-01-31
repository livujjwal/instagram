import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsMessenger, BsThreads } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen  w-60 fixed left-0 top-0 border-r border-slate-300 gap-2">
      <h1 className="font-logo text-3xl my-8 self-start px-6">Instgram</h1>

      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%] ">
        <MdHomeFilled
          size={30}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="font-semibold px-1">Home</p>
      </div>
      <div className="flex items-center px-2 gap-2  py-2 cursor-pointer hoverSideBar w-[90%]">
        <RiSearchLine
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Search</p>
      </div>
      <div className="flex items-center px-2 gap-2  py-2 cursor-pointer hoverSideBar w-[90%]">
        <MdOutlineExplore
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Explore</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <FiInstagram
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Reels</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <BsMessenger
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Messages</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <FaRegHeart
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Notification</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <CgAddR
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Create</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <FaRegUser
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Profile</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 mt-16 cursor-pointer hoverSideBar w-[90%]">
        <BsThreads
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">Thread</p>
      </div>
      <div className="flex items-center px-2 gap-2 py-2 cursor-pointer hoverSideBar w-[90%]">
        <RxHamburgerMenu
          size={25}
          className="hover:scale-105 duration-400 ease-linear"
        />
        <p className="px-1  font-light m-1">More</p>
      </div>
    </div>
  );
};

export default Sidebar;
