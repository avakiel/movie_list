import { MovieType } from "../Types/MovieType";

const isLocal = false;
const vercelServerAPI = "https://json-server-vercel-dun.vercel.app/"; // don't work correct
const localServerAPI = "http://localhost:3005/"; // use: $json-server --watch db.json --port 3005

export function getMovies(catalog: string) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}${catalog}`).then(
    (response) => {
      return response.json();
    }
  );
}

export function updateMovie(updatedMovie: MovieType) {
  return fetch(
    `${isLocal ? localServerAPI : vercelServerAPI}movies/${updatedMovie.id}`,
    {
      method: "PUT",
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

export function postMovie(newMovie: MovieType) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}movies`, {
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
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}favourite`, {
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

export function postFuture(movie: MovieType) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}future`, {
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

export function postWatched(movie: MovieType) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}watched`, {
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

export function deleteMovie(id: string) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}movies/${id}`, {
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

export function deleteFavourite(id: string) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}favourite/${id}`, {
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

export function deleteFuture(id: string) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}future/${id}`, {
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

export function deleteWatched(id: string) {
  return fetch(`${isLocal ? localServerAPI : vercelServerAPI}watched/${id}`, {
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
