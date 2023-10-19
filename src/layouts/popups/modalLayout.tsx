import React, { FC, ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  Box,
  ModalProps,
  ModalHeader,
} from "@chakra-ui/react";

interface ModalContainer extends ModalProps {
  children: ReactNode;
  title?: string;
}

const ModalContainer: FC<ModalContainer> = ({
  children,
  title,
  ...rest
}: ModalContainer) => {
  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Box py={"1em"}>{children}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
