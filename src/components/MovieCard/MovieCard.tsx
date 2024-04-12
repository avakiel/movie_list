import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { MouseEvent } from "react";
import { MovieType } from "../../Types/MovieType";
import { DeleteIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { removeMovie, selectMovies } from "../../Redux/movieReducer";
import { FaHeart } from "react-icons/fa";
import {
  addFavourite,
  removeFavourite,
  selectFavourites,
} from "../../Redux/favouritesReducer";
import {
  addWatched,
  removeWatched,
  selectWatched,
} from "../../Redux/watchedReducer";
import {
  addFuture,
  removeFuture,
  selectFuture,
} from "../../Redux/futureReducer";
import { EditCard } from "../EditCard/EditCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

interface MovieCardProps {
  data: MovieType;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const favourite = useAppSelector(selectFavourites);
  const watched = useAppSelector(selectWatched);
  const future = useAppSelector(selectFuture);
  const catalog = useAppSelector(selectMovies);

  const isFavourite = favourite.find((movie) => movie.id === data.id);
  const isWatched = watched.find((movie) => movie.id === data.id);
  const isFuture = future.find((movie) => movie.id === data.id);

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    const isInFavourite = favourite.some(movie => movie.id === data.id);
    const isInWatched = watched.some(movie => movie.id === data.id);
    const isInFuture = future.some(movie => movie.id === data.id);
    const isInCatalog = catalog.some(movie => movie.id === data.id);

    if (isInFavourite) {
      dispatch(removeFavourite(data.id));
    }
    if (isInWatched) {
      dispatch(removeWatched(data.id));
    }
    if (isInFuture) {
      dispatch(removeFuture(data.id));
    }
    if (isInCatalog) {
      console.log(data.id, isInCatalog)
      dispatch(removeMovie(data.id));
    }
  };

  const addToFavourite = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isFavourite) {
      dispatch(removeFavourite(data.id));
    } else {
      dispatch(addFavourite(data));
    }
  };

  const addToFuture = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isFuture) {
      dispatch(removeFuture(data.id));
    } else {
      dispatch(addFuture(data));
    }
  };

  const addToWatched = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isWatched) {
      dispatch(removeWatched(data.id));
    } else {
      dispatch(addWatched(data));
    }
  };

  return (
    <>
      <Card
        onClick={onOpen}
        height="700px"
        width="md"
        cursor="pointer"
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="yellow.100"
        _hover={{
          bg: "yellow.200",
          transition: "background-color 0.03s ease-in-out 0.03s",
        }}
      >
        <Flex justifyContent="space-between" marginBottom="5px">
          <EditCard data={data} />
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete"
            bg="orange.300"
            size="sm"
            _hover={{
              color: "green.50",
              bg: "orange.400",
              transition: "background-color 0.02s ease-in-out 0.02s",
            }}
            onClick={(e) => handleDelete(e)}
          />
        </Flex>
        <CardBody padding="0px" boxSizing="unset">
          <Flex justifyContent="center">
            <Image
              src={data.image}
              alt="Poster"
              borderRadius="lg"
              boxSize="auto"
              height="400px"
              objectFit="cover"
            />
          </Flex>
          <Stack mt="3" spacing="1" alignItems="center">
            <Text
              as="h2"
              fontSize="27px"
              fontWeight="700"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {data.title}
            </Text>
            ;
            <Divider borderColor="green.300" />;
            <Text fontWeight="700">
              Rating:{" "}
              <Text as="span" fontWeight="normal">
                {data.rating}
              </Text>
            </Text>
            <Divider borderColor="green.300" />
            <Text fontWeight="700">
              Release date:{" "}
              <Text as="span" fontWeight="normal">
                {data.release_date}
              </Text>
            </Text>
            <Divider borderColor="green.300" />
          </Stack>
        </CardBody>
        <CardFooter padding="0px" justifyContent="center">
          <ButtonGroup>
            <IconButton
              onClick={(e) => addToFavourite(e)}
              aria-label="Favorite"
              icon={<FaHeart />}
              color={!isFavourite ? "white" : "red"}
              bg="green.300"
              _hover={{
                color: "red.500",
                bg: "green.50",
                transition: "background-color 0.02s ease-in-out 0.02s",
              }}
            />
            <IconButton
              onClick={(e) => addToFuture(e)}
              aria-label="Future"
              bg="blue.500"
              color={!isFuture ? "white" : "red"}
              _hover={{
                color: "blue",
                bg: "blue.100",
                transition: "background-color 0.02s ease-in-out 0.02s",
              }}
              icon={<AiOutlineClockCircle />}
            ></IconButton>
            <IconButton
              onClick={(e) => addToWatched(e)}
              aria-label="Watched"
              bg="orange.500"
              color={!isWatched ? "white" : "red"}
              _hover={{
                color: "orange.700",
                bg: "orange.100",
                transition: "background-color 0.02s ease-in-out 0.02s",
              }}
              icon={<BsCheck2All />}
            ></IconButton>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="left">
            <Image
              src={data.image}
              alt={data.title}
              mb={4}
              borderRadius="md"
              height="500px"
              width="100%"
            />
            <Stack spacing={4}>
              <Stack spacing={2}>
                <Text fontWeight="bold">Description:</Text>
                <Text>{data.description}</Text>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Text fontWeight="bold">Genre:</Text>
                <Text>{data.genre.join(", ")}</Text>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Text fontWeight="bold">Actors:</Text>
                <Text>{data.actors.join(", ")}</Text>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Text fontWeight="bold">Director:</Text>
                <Text>{data.director}</Text>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Text fontWeight="bold">Rating:</Text>
                <Text>{data.rating}</Text>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Text fontWeight="bold">Release date:</Text>
                <Text>{data.release_date}</Text>
              </Stack>
            </Stack>
          </ModalBody>
          ;
          <ModalFooter justifyContent="center">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
