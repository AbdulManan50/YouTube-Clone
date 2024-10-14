import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../Utils/Rapidapi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import SugestedVideo from "../Component/SugestedVideo";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchdata(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  const fetchRelatedVideo = () => {
    fetchdata(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  return (
    <div className="flex justify-center h-[calc(100vh-6.25rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar  mt-5 ml-auto">
      <div className=" w-[60%] pr-5">
        <div className="">
          <div className="h-[80vh]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2 font-Roboto text-white">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  {video?.author?.avatar && video?.author?.avatar.length > 0 ? (
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                      alt="Author Avatar"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xs text-white">No Image</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center text-white">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm text-white">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <div>
                  <h1 className="text-white px-4 py-1 bg-red-500 rounded-full font-Roboto font-medium text-sm hover:bg-red-800">
                    {" "}
                    Subscribe
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white ml-4">
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#272727] rounded-xl mt-4 text-sm text-white">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <div className="flex flex-col px-4 py-6 lg:w-[350px] xl:w-[400px]">
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return null; // Ensure item is a video
            return <SugestedVideo key={index} video={item?.video} />; // Pass the video prop
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
