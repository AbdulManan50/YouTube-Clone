import React from "react";
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

export default function SugestedVideo({ video }) { // Accept video as prop
  // Console log to check if video is defined
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3 ">
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200">
            {video?.thumbnails && video?.thumbnails.length > 0 ? (
              <img
                className="h-full w-full rounded-lg"
                src={video?.thumbnails[0]?.url}
                alt="Video Thumbnail"
              />
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <span className="text-xs text-white">No Thumbnail</span>
              </div>
            )}
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm lg:text-xs xl:text-sm font-Roboto line-clamp-2  text-white">
              {video?.title}
            </span>
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 flex items-center text-white">
              {video?.author?.title}
              {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-[12px] lg:text-[10px] xl:text-[12px] ml-1 text-white" />
              )}
            </span>
            <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold truncate overflow-hidden text-white">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views `}</span>
              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate text-white">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
