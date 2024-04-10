import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width={"40%"}
    >
      <Link to="/">Movies</Link>
      <Link to="/future">Future</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/watched">Watched</Link>
    </Flex>
  );
};
