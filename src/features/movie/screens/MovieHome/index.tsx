import { usePopularMovies } from "@features/movie/hooks";
import React, { useState } from "react";
import { MovieHomeContainer } from "../../containers/MovieHome";

const MovieHomeScreen = () => {
  const { fetchNextPage, isFetching, movies } = usePopularMovies();

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <MovieHomeContainer
      onLoadMore={() => !isFetching && fetchNextPage()}
      selectedMovieIndex={currentIndex}
      onSelectedMovieIndexChange={setCurrentIndex}
      movies={movies}
    />
  );
};

export default MovieHomeScreen;
