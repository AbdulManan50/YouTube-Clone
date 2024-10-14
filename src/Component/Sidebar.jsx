import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { RiPlayListAddFill } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsFire } from "react-icons/bs";
import { RiMusicFill } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

export default function Sidebar() {
  const sidebarItem1 = [
    {
      id: 1,
      name: "Home",
      icon: <MdHomeFilled />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItem2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <IoIosContact />,
    },
    {
      id: 2,
      name: "History",
      icon: <GoHistory />,
    },
    {
      id: 3,
      name: "Playlist",
      icon: <RiPlayListAddFill />,
    },
    {
      id: 4,
      name: "Your video",
      icon: <RiVideoLine />,
    },
    {
      id: 5,
      name: "Watchlater",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked Video",
      icon: <AiOutlineLike />,
    },
    {
      id: 7,
      name: "Dowland",
      icon: <LiaDownloadSolid />,
    },
  ];
  const sidebarItem3 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsFire />,
    },
    {
      id: 2,
      name: "Music",
      icon: <RiMusicFill />,
    },
    {
      id: 3,
      name: "News",
      icon: <IoNewspaperOutline />,
    },
    {
      id: 4,
      name: "Your video",
      icon: <GiTrophyCup />,
    },
  ];
  const sidebarItem4 = [
    {
      id: 1,
      name: "Setting",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report History",
      icon: <FaRegFlag />,
    },
    {
      id: 3,
      name: "News",
      icon: <IoHelpCircleOutline />,
    },
    {
      id: 4,
      name: "Your video",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <>
      <div className="w-full px-3 h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <div className="space-y-2 pb-3">
          {sidebarItem1.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-4 hover:bg-[#3D3D3D] py-2 px-3 rounded-lg">
                <div className="text-xl text-white">{item.icon}</div>
                <h1 className="text-sm font-Roboto font-medium text-white">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <hr className="border-lightdark" />
        <div className="pt-3 pb-2">
          <h1 className="text-white font-Roboto text-sm font-medium flex items-center gap-3 px-3 pb-2">
            You <FaAngleRight />
          </h1>
          {sidebarItem2.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-4 hover:bg-[#3D3D3D] py-2 px-3 rounded-lg">
                <div className="text-xl text-white">{item.icon}</div>
                <h1 className="text-sm font-Roboto font-medium text-white">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <hr className="border-lightdark" />
        <div className="pt-3 pb-2">
          <h1 className="text-white font-Roboto text-sm font-medium  px-3 pb-2">
            Explore
          </h1>
          {sidebarItem3.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-4 hover:bg-[#3D3D3D] py-2 px-3 rounded-lg">
                <div className="text-xl text-white">{item.icon}</div>
                <h1 className="text-sm font-Roboto font-medium text-white">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="pt-1 pb-2">
          {sidebarItem4.map((item) => {
            return (
              <div key={item.id} className="flex items-center space-x-4 hover:bg-[#3D3D3D] py-2 px-3 rounded-lg">
                <div className="text-xl text-white">{item.icon}</div>
                <h1 className="text-sm font-Roboto font-medium text-white">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <hr className="border-lightdark" />
        <h1 className="flex space-x-1 text-[#aaa] flex-wrap text-[13px] text-start pt-2">
          <span>About</span> <br /> <span>Press</span> <br />{" "}
          <span>Copyright</span> <br /> <span>Contact us</span> <br />{" "}
          <span>Creator</span> <br /> <span>Advertise</span> <br />{" "}
          <span>Developers</span>{" "}
        </h1>
        <h1 className="flex space-x-1 text-[#aaa] flex-wrap text-[13px] text-start pt-2">
          <span>Terms</span> <br /> <span>Privacy Policy</span> <br />{" "}
          <span>&</span> <br /> <span>Safety How</span> <br />{" "}
          <span>YouTube</span> <br /> <span>works Test</span> <br />{" "}
          <span>new features</span>{" "}
        </h1>
      </div>
    </>
  );
}
