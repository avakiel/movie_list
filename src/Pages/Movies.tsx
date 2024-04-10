import { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Divider } from '@chakra-ui/react';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { MovieType } from '../MovieType';

const SERVER_URL = 'http://localhost:3000/movies'

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovies] = useState<MovieType[] | []>([]);

  
  const findMovie = () => {
    fetch(SERVER_URL)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };

  const handleSearchClick = () => {
    findMovie();
  };

  console.log(movie)

 
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
        <Button colorScheme="teal" onClick={handleSearchClick}>
          Search
        </Button>
      </Flex>

      <Divider mb={4} />
      {movie ? movie.map(movie => <MovieCard key={movie.id} data={movie} />) : null}
    </Box>
  );
};
