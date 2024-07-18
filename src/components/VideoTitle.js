import React from "react";
import lan from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen aspect-video pt-20 px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-12  text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" p-4 px-10 text-xl  bg-white text-black rounded-lg hover:bg-opacity-50">
          ▶{lan[langKey].Play}
        </button>
        <button className=" mx-2 p-4 px-10 text-xl bg-opacity-50 bg-gray-500 text-white rounded-lg">
          {lan[langKey].MoreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
