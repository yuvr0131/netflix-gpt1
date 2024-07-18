import React from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  //Fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
