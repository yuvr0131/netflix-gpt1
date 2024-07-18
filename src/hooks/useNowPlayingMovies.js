import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  //Fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(
    (store) => store.movies.NowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
