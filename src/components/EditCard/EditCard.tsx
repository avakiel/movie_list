import React, { useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../Redux/hooks";
import { addMovie, patchMovie } from "../../Redux/movieReducer";
import { MovieType } from "../../Types/MovieType";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

interface EditCardProps {
  data?: MovieType;
}

export const EditCard: React.FC<EditCardProps> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const initialRef = useRef(null);

  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [rating, setRating] = useState(data?.rating || "");
  const [releaseDate, setReleaseDate] = useState(data?.release_date || "");
  const [genre, setGenre] = useState(data?.genre.join(",") || "");
  const [actors, setActors] = useState(data?.actors.join(",") || "");
  const [director, setDirector] = useState(data?.director || "");
  const [image, setImage] = useState(data?.image || "");

  const handleSave = () => {
    const titleInput = initialRef.current as HTMLInputElement | null;
    if (!titleInput?.value) {
      if (titleInput) {
        titleInput.style.borderColor = "red";
      }
      return;
    }
    const updatedMovie = {
      id: data?.id as string,
      title: title,
      description: description,
      rating: +rating,
      release_date: releaseDate,
      genre: genre.split(","),
      actors: actors.split(","),
      director: director,
      image: image,
    };

    const newMovie = {
      id: Date.now().toString(),
      title: title,
      description: description,
      rating: +rating,
      release_date: releaseDate,
      genre: genre.split(","),
      actors: actors.split(","),
      director: director,
      image: image,
    };

    if (!data) {
      dispatch(addMovie(newMovie));
    } else {
      dispatch(patchMovie(updatedMovie));
    }

    setTitle("");
    setDescription("");
    setDirector("");
    setActors("");
    setImage("");
    setGenre("");
    setReleaseDate("");
    setRating("");
    onClose();
  };

  return (
    <>
      {data ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          bg="orange.300"
          size="sm"
          _hover={{
            color: "green.50",
            bg: "orange.400",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          <EditIcon />
        </Button>
      ) : (
        <Button
          marginLeft="2%"
          onClick={onOpen}
          leftIcon={<AddIcon />}
          bg="orange.300"
          size="sm"
          fontWeight="700"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          Add Movie
        </Button>
      )}

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                height="70px"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Release Date</FormLabel>
              <Input
                placeholder="Release Date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Genre</FormLabel>
              <Input
                placeholder="Genre"
                value={genre}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Actors</FormLabel>
              <Input
                placeholder="Actors"
                value={actors}
                onChange={(e) => setActors(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Director</FormLabel>
              <Input
                placeholder="Director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
