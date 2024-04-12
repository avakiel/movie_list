import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Redux/Store";
import { MovieType } from "../Types/MovieType";
import {
  deleteWatched,
  getMovies,
  postWatched,
} from "../fetchClient/fetchClient";

export interface MoviesState {
  watched: MovieType[];
  loading: boolean;
  error: string;
}

const initialState: MoviesState = {
  watched: [],
  loading: false,
  error: "",
};

export const fetchWatched = createAsyncThunk("watched/get", async () => {
  const response = await getMovies("watched");

  return response;
});

export const addWatched = createAsyncThunk(
  "watched/post",
  async (movie: MovieType) => {
    const response = await postWatched(movie);

    return response;
  }
);

export const removeWatched = createAsyncThunk(
  "watched/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteWatched(id);

      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWatched.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWatched.fulfilled, (state, action) => {
        state.watched = action.payload;
        state.loading = false;
      })
      .addCase(fetchWatched.rejected, (state, action) => {
        state.error = "Sorry, try again later.";
        state.loading = false;
      })
      .addCase(addWatched.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWatched.fulfilled, (state, action) => {
        state.watched.push(action.payload);
        state.loading = false;
      })
      .addCase(addWatched.rejected, (state, action) => {
        state.error = "Failed to add movie";
        state.loading = false;
      })
      .addCase(removeWatched.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeWatched.fulfilled, (state, action) => {
        state.watched = state.watched.filter(
          (movie) => movie.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(removeWatched.rejected, (state, action) => {
        state.error = "Failed to delete movie";
        state.loading = false;
      });
  },
});

export const selectWatched = (state: RootState) => state.watched.watched;
export const selectWatchedLoader = (state: RootState) => state.watched.loading;

export default watchedSlice.reducer;
