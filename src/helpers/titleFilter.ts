import { MovieType } from "../Types/MovieType";

export const titleFilter = (movies: MovieType[], search: string) => {
  const visibleMovies = [...movies].filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  return visibleMovies;
};
