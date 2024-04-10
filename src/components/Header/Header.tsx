import React from "react";
import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Nav } from "../Nav/Nav";

const Header = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 850px)");

  return (
    <Flex
      as="header"
      align="center"
      px={isLargerThan768 ? 8 : 4}
      py={4}
      bg="teal.500"
      color="white"
      borderBottom="1px solid"
      borderColor="teal.600"
      flexWrap="wrap"
    >
      <Heading
        as="h1"
        size={isLargerThan768 ? "lg" : "md"}
        mr={isLargerThan768 ? 4 : 0}
      >
        My Movie List
      </Heading>
      {isLargerThan768 ? (
        <Nav />
      ) : (
        <BurgerMenu />
      )}
    </Flex>
  );
};

export default Header;
