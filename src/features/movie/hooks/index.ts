import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import { getPopularMovies, Movie } from "../services/movie";

export const usePopularMovies = (page = 0) => {
  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    "projects",
    ({ pageParam }) => {
      return getPopularMovies(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

  const movies: Movie[] =
    data?.pages.reduce(
      (previous, current) => [...previous, ...current.results],
      [] as Movie[]
    ) || [];

  return {
    movies,
    fetchNextPage,
    isFetching,
  };
};
