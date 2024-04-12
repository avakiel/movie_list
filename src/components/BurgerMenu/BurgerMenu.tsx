import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        marginLeft="100px"
        bg="orange.300"
        border="none"
        size="sm"
        _hover={{
          color: "green.700",
          bg: "orange.100",
          transition: "background-color 0.02s ease-in-out 0.02s",
        }}
      />
      <MenuList bg="orange.300" border="none">
        <MenuItem
          bg="orange.300"
          fontSize="20px"
          border="none"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          <Link to="/">Catalog</Link>
        </MenuItem>
        <MenuItem
          bg="orange.300"
          fontSize="20px"
          border="none"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          <Link to="/future">Future</Link>
        </MenuItem>
        <MenuItem
          bg="orange.300"
          fontSize="20px"
          border="none"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          <Link to="/favourites">Favourites</Link>
        </MenuItem>
        <MenuItem
          bg="orange.300"
          fontSize="20px"
          border="none"
          _hover={{
            color: "green.700",
            bg: "orange.100",
            transition: "background-color 0.02s ease-in-out 0.02s",
          }}
        >
          <Link to="/watched">Watched</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
