import { Box, Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { MovieList } from "../components/MovieList/MovieList";
import {
  fetchWatched,
  selectWatched,
  selectWatchedLoader,
} from "../Redux/watchedReducer";

export const Watched = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const watched = useAppSelector(selectWatched);
  const isLoading = useAppSelector(selectWatchedLoader);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWatched());
  }, [dispatch]);

  return (
    <>
      <Box p={4} bg="green.800">
        <Heading color="white" as="h1" size="xl" mb={4}>
          Watched
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
        <MovieList movies={watched} isLoading={isLoading} />
      </Box>
    </>
  );
};
