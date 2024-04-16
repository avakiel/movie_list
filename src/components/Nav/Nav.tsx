import { useState } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState('/movie_list');

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignSelf="flex-end"
      fontSize="30px"
      fontWeight="700"
      gap="20px"
    >
      <Link
        as={RouterLink}
        to="/movie_list"
        _hover={{ color: "green.300" }}
        color={activeLink === "/movie_list" ? "green.300" : "inherit"}
        onClick={() => handleSetActiveLink("/movie_list")}
      >
        Catalog
      </Link>
      <Link
        as={RouterLink}
        to="/favourites"
        _hover={{ color: "green.300" }}
        color={activeLink === "/favourites" ? "green.300" : "inherit"}
        onClick={() => handleSetActiveLink("/favourites")}
      >
        Favourites
      </Link>
      <Link
        as={RouterLink}
        to="/future"
        _hover={{ color: "green.300" }}
        color={activeLink === "/future" ? "green.300" : "inherit"}
        onClick={() => handleSetActiveLink("/future")}
      >
        Future
      </Link>
      <Link
        as={RouterLink}
        to="/watched"
        _hover={{ color: "green.300" }}
        color={activeLink === "/watched" ? "green.300" : "inherit"}
        onClick={() => handleSetActiveLink("/watched")}
      >
        Watched
      </Link>
    </Flex>
  );
};
