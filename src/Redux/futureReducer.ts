import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Redux/Store";
import { MovieType } from "../Types/MovieType";
import {
  deleteFuture,
  getMovies,
  postFuture,
} from "../fetchClient/fetchClient";

export interface MoviesState {
  future: MovieType[];
  loading: boolean;
  error: string;
}

const initialState: MoviesState = {
  future: [],
  loading: false,
  error: "",
};

export const fetchFuture = createAsyncThunk("future/get", async () => {
  const response = await getMovies("future");

  return response;
});

export const addFuture = createAsyncThunk(
  "Future/post",
  async (movie: MovieType) => {
    const response = await postFuture(movie);

    return response;
  }
);

export const removeFuture = createAsyncThunk(
  "Future/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteFuture(id);

      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const futureSlice = createSlice({
  name: "future",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFuture.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFuture.fulfilled, (state, action) => {
        state.future = action.payload;
        state.loading = false;
      })
      .addCase(fetchFuture.rejected, (state, action) => {
        state.error = "Sorry, try again later.";
        state.loading = false;
      })
      .addCase(addFuture.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFuture.fulfilled, (state, action) => {
        state.future.push(action.payload);
        state.loading = false;
      })
      .addCase(addFuture.rejected, (state, action) => {
        state.error = "Failed to add movie";
        state.loading = false;
      })
      .addCase(removeFuture.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFuture.fulfilled, (state, action) => {
        console.log("future", action.payload);
        state.future = state.future.filter(
          (movie) => movie.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(removeFuture.rejected, (state, action) => {
        state.error = "Failed to delete movie";
        state.loading = false;
      });
  },
});

export const selectFuture = (state: RootState) => state.future.future;
export const selectFutureLoader = (state: RootState) => state.future.loading;

export default futureSlice.reducer;
