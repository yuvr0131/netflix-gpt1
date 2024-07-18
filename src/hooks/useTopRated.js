import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useTopRated = () => {
  //Fetch data from tmdb api and update store
  const dispatch = useDispatch();
  const TopRated = useSelector((store) => store.movies.TopRated);
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !TopRated && getTopRated();
  }, []);
};

export default useTopRated;
