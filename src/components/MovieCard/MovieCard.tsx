import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MovieType } from "../../MovieType";

interface MovieCardProps {
  data: MovieType;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <Card
    maxW="sm"
    maxH="900px"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    >
      <CardBody>
        <Flex justifyContent="center">
          <Image
            src={data.Poster}
            alt="Poster"
            borderRadius="lg"
            boxSize="auto"
            maxH="400px"
            objectFit="contain"
          />
        </Flex>
        <Stack mt="3" spacing="1">
          <Heading size="lg">{data.Title}</Heading>
          <Divider />
          <Text>{data.Director}</Text>
          <Divider />
          <Text maxW="100%">{data.Actors}</Text>
          <Divider />
          <Text>{data.Genre}</Text>
          <Divider />
          <Link>{data.imdbRating}</Link>
          <Divider />
          <Text>{data.Plot}</Text>
          <Divider />
          <Text>{data.Released}</Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent="center">
        <ButtonGroup>
          <Button variant="solid" colorScheme="green">
            Favourite
          </Button>
          <Button variant="solid" colorScheme="blue">
            Future
          </Button>
          <Button variant="solid" colorScheme="yellow">
            Watched
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
