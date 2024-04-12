import { useEffect, useState } from "react";
import { Box, Flex, Heading, Input, Button, Divider } from "@chakra-ui/react";
import { fetchMovies, selectMovies } from "../Redux/movieReducer";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { MovieList } from "../components/MovieList/MovieList";
import { EditCard } from "../components/EditCard/EditCard";
import { fetchFavourites } from "../Redux/favouritesReducer";
import { fetchFuture } from "../Redux/futureReducer";
import { fetchWatched } from "../Redux/watchedReducer";
import { titleFilter } from "../helpers/titleFilter";

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = useAppSelector(selectMovies);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await Promise.all([
          dispatch(fetchMovies()),
          dispatch(fetchFavourites()),
          dispatch(fetchFuture()),
          dispatch(fetchWatched()),
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setIsLoading(true);
    fetchAllData();
  }, [dispatch]);

  return (
    <Box p={4} bg="green.700">
      <Heading color="white" as="h1" size="xl" mb={4}>
        Catalog{"  "}
        <EditCard />
      </Heading>

      <Flex mb={4}>
        <Input
          width="20%"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mr={2}
          color="white"
          _placeholder={{ color: "white" }}
        />
        <Button
          bg="orange.300"
          fontWeight="700"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          Search
        </Button>
      </Flex>

      <Divider mb={4} />
      <MovieList
        movies={titleFilter(movies, searchQuery)}
        isLoading={isLoading}
      />
    </Box>
  );
};
