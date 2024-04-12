import React from 'react'
import { MovieType } from '../../Types/MovieType'
import { Box, Flex, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { Loading } from '../Loading/Loading'
import { MovieCard } from '../MovieCard/MovieCard'

interface MovieListProps {
    movies: MovieType[]
    isLoading: boolean
}

export const MovieList: React.FC<MovieListProps> = ({ movies, isLoading }) => {
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");

  return (
    <>{isLoading ? (
        <Flex width="100%" justifyContent="center">
          <Loading />
        </Flex>
      ) : (
        <SimpleGrid minChildWidth={isLargerThan850 ? "400px" : "300px"} columns={4} spacing={5}>
          {movies.map((movie) => (
               <Box key={movie.id} display="flex" justifyContent="center" alignItems="center">
               <MovieCard data={movie} />
             </Box>
          ))}
        </SimpleGrid>
      )}</>
  )
}
