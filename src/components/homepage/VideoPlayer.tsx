import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const video_Path = "https://www.youtube.com/watch?v=zn283yjJASQ";
  const Player = React.useRef(null);
  return (
    <div className="mb-[7rem]">
      <h1 className="text-center mb-[20px] text-[#328bc8] font-bold text-4xl">
        TAKE A TOUR AT OUR SCHOOL
      </h1>

      <div className="w-full h-[25rem] bg-slate-700">
        <ReactPlayer
          ref={Player}
          url={video_Path}
          controls={true}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
