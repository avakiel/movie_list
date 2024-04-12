import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Nav } from "../Nav/Nav";

const Header = () => {
  const [isLargerThan850] = useMediaQuery("(min-width: 850px)");

  return (
    <Flex
      as="header"
      align="center"
      px={isLargerThan850 ? 8 : 4}
      py={4}
      bg="green.900"
      color="white"
      borderBottom="1px solid"
      borderColor="green.100"
      flexWrap="wrap"
      position="relative"
      boxShadow="5px 15px 20px rgba(0, 0, 0, 0.5)"
      justifyContent="space-between"
    >
      <Heading
        fontStyle="italic"
        as="h1"
        size={isLargerThan850 ? "xl" : "md"}
        mr={isLargerThan850 ? 4 : 0}
      >
        BEST MOVIES
      </Heading>
      {isLargerThan850 ? <Nav /> : <BurgerMenu />}
    </Flex>
  );
};

export default Header;
