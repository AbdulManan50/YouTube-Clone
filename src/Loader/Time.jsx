import moment from "moment";
import React from "react";

export default function Time({ time }) {
  const VideoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <>
      <div>
        <span className="absolute bottom-3 right-2 bg-lightdark text-white px-2 py-1 text-xs rounded-md font-Roboto">
          {VideoTime}
        </span>
      </div>
    </>
  );
}
