import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryMovieContainer />
      {/*
       . main video container
        -videobackground
        -videotitle
       . secondary container
          -movielist*n
              -moviecards*n
        */}
    </div>
  );
};

export default Browse;
