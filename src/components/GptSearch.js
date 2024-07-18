import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { background } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className=" -z-10 absolute">
        <img src={background} alt="background image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
