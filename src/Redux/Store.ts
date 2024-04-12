import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import favouritesReducer from "./favouritesReducer";
import futureReducer from "./futureReducer";
import watchedReducer from "./watchedReducer";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    favourites: favouritesReducer,
    future: futureReducer,
    watched: watchedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
