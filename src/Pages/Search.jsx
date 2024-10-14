import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import SearchCard from "../Component/SearchCard";
import { fetchdata } from "../Utils/Rapidapi";
import { useParams } from "react-router-dom";

export default function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchdata(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };

  return (
    <>
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[100%] flex">
          <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
            <div className=" grid grid-cols-1 gap-2 p-2">
              {result?.map((item, index) => {
                if (item?.type !== "video") return false;
                return <SearchCard key={index} video={item?.video} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
