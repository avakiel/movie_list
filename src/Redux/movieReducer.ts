import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Redux/Store';
import { AppDispatch } from '../Redux/Store';
import { MovieType } from '../MovieType';


export interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  fetchError: string
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  fetchError: '',
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieType[]>) => {
      state.movies = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload
    }
  },
});

export const { setMovies, setLoading, setFetchError } = moviesSlice.actions;

export const fetchMovies = () => async (dispatch: AppDispatch) => {
  const SERVER_URL = 'http://localhost:3001/movies';
  try {
    dispatch(setLoading(true));
    const response = await fetch(SERVER_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    dispatch(setMovies(data));
  } catch (error) {
   dispatch(setFetchError("can't load data"))
  }
};

export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
