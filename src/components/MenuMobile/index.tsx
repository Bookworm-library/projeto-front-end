import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export interface IMenuButton {
  buttonTitle: string;
  buttonAction: () => void;
}

interface IMenuMobileProps {
  buttons: IMenuButton[];
}

export const MenuMobile = ({ buttons }: IMenuMobileProps) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        bg="white"
        display={{ lg: "none" }}
      />
      <MenuList>
        {buttons?.map((btn) => {
          return (
            <MenuItem key={btn.buttonTitle} onClick={btn.buttonAction}>
              {btn.buttonTitle}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
