import { MovieType } from "../Types/MovieType";

const isLocal = false;
const renderServerAPI = "https://movie-list-backend-1fvj.onrender.com/";
const localServerAPI = "http://localhost:3005/"; // use: $json-server --watch db.json --port 3005

export function getMovies(catalog: string) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}${catalog}`).then(
    (response) => {
      return response.json();
    }
  );
}

export function updateMovie(updatedMovie: Omit<MovieType, 'id'>, id: number) {
  return fetch(
    `${isLocal ? localServerAPI : renderServerAPI}movies/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error updating movie:", error);
      throw error;
    });
}

export function postMovie(newMovie: Omit<MovieType, 'id'>) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error posting movie:", error);
      throw error;
    });
}

export function postFavourite(movie: MovieType) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}favourite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error posting movie:", error);
      throw error;
    });
}

export function postFuture(movieId: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}future`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: movieId}),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error posting movie:", error);
      throw error;
    });
}

export function postWatched(movieId: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}watched`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: movieId}),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add movie");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error posting movie:", error);
      throw error;
    });
}

export function deleteMovie(id: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}movies/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }
      return id;
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      throw error;
    });
}

export function deleteFavourite(id: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}favourite/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }
      return id;
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      throw error;
    });
}

export function deleteFuture(id: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}future/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }
      return id;
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      throw error;
    });
}

export function deleteWatched(id: number) {
  return fetch(`${isLocal ? localServerAPI : renderServerAPI}watched/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }
      return id;
    })
    .catch((error) => {
      console.error("Error deleting movie:", error);
      throw error;
    });
}
