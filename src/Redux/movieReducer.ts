import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Redux/Store";
import { MovieType } from "../Types/MovieType";
import {
  deleteMovie,
  getMovies,
  postMovie,
  updateMovie,
} from "../fetchClient/fetchClient";

export interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  error: string;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: "",
};

export const fetchMovies = createAsyncThunk("movies/get", async () => {
  const response = await getMovies("movies");

  return response;
});

export const addMovie = createAsyncThunk(
  "movies/post",
  async (newMovie: Omit<MovieType, 'id'>) => {
    const response = await postMovie(newMovie);

    return response;
  }
);

export const removeMovie = createAsyncThunk(
  "movies/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await deleteMovie(id);

      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const patchMovie = createAsyncThunk(
  "movie/update",
  async (params: { movie: Omit<MovieType, 'id'>, id: number }) => {
    const response = await updateMovie(params.movie, params.id);
    return response;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = "Sorry, try again later.";
        state.loading = false;
      })
      .addCase(addMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
        state.loading = false;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.error = "Failed to add movie";
        state.loading = false;
      })
      .addCase(removeMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeMovie.fulfilled, (state, action) => {
        console.log(state.movies);
        console.log(action.payload);
        state.movies = state.movies.filter(
          (movie) => movie.id !== +action.payload
        );
        state.loading = false;
      })
      .addCase(removeMovie.rejected, (state, action) => {
        state.error = "Failed to delete movie";
        state.loading = false;
      })
      .addCase(patchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(patchMovie.fulfilled, (state, action) => {
        const updatedMovie = action.payload;
        const index = state.movies.findIndex(
          (movie) => movie.id === updatedMovie.id
        );
        if (index !== -1) {
          state.movies[index] = updatedMovie;
        }
        state.loading = false;
      })

      .addCase(patchMovie.rejected, (state, action) => {
        state.error = "Sorry, try again later.";
        state.loading = false;
      });
  },
});

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectMoviesLoader = (state: RootState) => state.movies.loading;

export default moviesSlice.reducer;
