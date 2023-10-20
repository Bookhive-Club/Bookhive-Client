import React, { FC, ReactNode } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";

interface IDrawerProps extends DrawerProps {
  title?: string;
  children: ReactNode;
}

const DrawerContainer: FC<IDrawerProps> = ({ title, children, ...rest }) => {
  return (
    <Drawer {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>
          <Box my={"1em"}>{children}</Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerContainer;
