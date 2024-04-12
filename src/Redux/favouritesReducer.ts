import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../Redux/Store";
import { MovieType } from "../Types/MovieType";
import {
  deleteFavourite,
  getMovies,
  postFavourite,
} from "../fetchClient/fetchClient";

export interface MoviesState {
  favourites: MovieType[];
  loading: boolean;
  error: string;
}

const initialState: MoviesState = {
  favourites: [],
  loading: false,
  error: "",
};

export const fetchFavourites = createAsyncThunk("favourites/get", async () => {
  const response = await getMovies("favourite");

  return response;
});

export const addFavourite = createAsyncThunk(
  "favourites/post",
  async (movie: MovieType) => {
    const response = await postFavourite(movie);

    return response;
  }
);

export const removeFavourite = createAsyncThunk(
  "favourites/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await deleteFavourite(id);

      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.favourites = action.payload;
        state.loading = false;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.error = "Sorry, try again later.";
        state.loading = false;
      })
      .addCase(addFavourite.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        state.favourites.push(action.payload);
        state.loading = false;
      })
      .addCase(addFavourite.rejected, (state, action) => {
        state.error = "Failed to add movie";
        state.loading = false;
      })
      .addCase(removeFavourite.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFavourite.fulfilled, (state, action) => {
        console.log("favourite", action.payload);
        state.favourites = state.favourites.filter(
          (movie) => movie.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(removeFavourite.rejected, (state, action) => {
        state.error = "Failed to delete movie";
        state.loading = false;
      });
  },
});

export const selectFavourites = (state: RootState) =>
  state.favourites.favourites;
export const selectFavouritesLoader = (state: RootState) =>
  state.favourites.loading;

export default favouritesSlice.reducer;
