import { createRequest } from "@shared/request";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface RootObject {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const request = createRequest({
  baseUrl: "https://api.themoviedb.org/3/movie/popular",
});

export const getPopularMovies = (page = 1) => {
  console.log({ page });
  return request.get<RootObject>("", {
    page,
    api_key: "b573d051ec65413c949e68169923f7ff",
  });
};
