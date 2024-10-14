import React from "react";
import Sidebar from "../Component/Sidebar";
import Video from "../Component/Video";
import { useAuth } from "../Context/Authprovider";

export default function Home() {
  const { data } = useAuth();

  console.log(data);

  return (
    <>
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="px-4 w-[85%] h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">

            {data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item.video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}