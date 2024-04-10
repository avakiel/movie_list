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
            src={data.image}
            alt="Poster"
            borderRadius="lg"
            boxSize="auto"
            maxH="400px"
            objectFit="contain"
          />
        </Flex>
        <Stack mt="3" spacing="1">
          <Heading size="lg">{data.title}</Heading>
          <Divider />
          <Link>{data.rating}</Link>
          <Divider />
          <Text>{data.release_date}</Text>
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
