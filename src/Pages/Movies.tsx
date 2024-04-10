import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Input, Button, Divider } from '@chakra-ui/react';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { fetchMovies, selectMovies } from '../Redux/movieReducer';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { Loading } from '../components/Loading/Loading';



export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies)

  useEffect(() => {
      dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Movie Catalog
      </Heading>

      <Flex mb={4}>
        <Input
          placeholder="Search by title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          mr={2}
        />
        <Button colorScheme="teal">
          Search
        </Button>
      </Flex>

      <Divider mb={4} />
      {movies.loading ? <Flex width="100%" justifyContent="center" >
        <Loading />
      </Flex> : movies.movies.map(movie => <MovieCard key={movie.id} data={movie} />)}
    </Box>
  );
};
