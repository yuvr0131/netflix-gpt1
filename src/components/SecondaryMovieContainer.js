import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.NowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-48 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
          <MovieList title={"TopRated"} movies={movies.TopRated} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.NowPlayingMovies}
          />
        </div>

        {/* movielist-popular
      multiple moviecards*n
      movielist-now playing
      movielist-trending
      movielist-horror

      */}
      </div>
    )
  );
};

export default SecondaryMovieContainer;
