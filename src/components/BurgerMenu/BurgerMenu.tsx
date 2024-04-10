import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
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
        marginLeft={'100px'}
      />
      <MenuList>
        <MenuItem><Link to="/">Movies</Link></MenuItem>
        <MenuItem><Link to="/future">For Future</Link></MenuItem>
        <MenuItem><Link to="/favourites">Favourites</Link></MenuItem>
        <MenuItem><Link to="/watched">Already Watched</Link></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;