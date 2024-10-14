import React from "react";
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  console.log(video);

  return (
    <div className="flex flex-col">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          <div className="rounded-xl hover:rounded-none duration-500 overflow-hidden relative">
            <img className="" src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex   mt-3">
            <div className="h-12 w-12 rounded-full">
              <img
                className="rounded-full  overflow-hidden"
                src={video?.author?.avatar[0].url}
                alt=""
              />
            </div>
            <div className="pl-2">
              <span className="text-white font-Roboto text-sm leading-4 line-clamp-2 font-medium">
                {video?.title}
              </span>
              <span className="text-[#aaa] font-Roboto text-sm flex items-center gap-2">
                {video?.author?.title}{" "}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-[#aaa] ml-1 text-xs" />
                )}{" "}
              </span>
              <div className="flex items-center gap-1">
                <div>
                  <span className="text-[#aaa] text-sm">{`${abbreviateNumber(
                    video?.stats?.views,
                    2
                  )} views`}</span>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-xl leading-none font-bold text-white font-Roboto">
                    .
                  </h1>
                </div>
                <div>
                  <span className="text-[#aaa] text-sm">
                    {video?.publishedTimeText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
