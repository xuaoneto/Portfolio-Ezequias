import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useApplicationContext } from "contexts/ApplicationContext";

export function ModalContentCustom({
  isOpen,
  onClose,
  withoutCloseButton,
  children,
  backdropFilter = null,
  ...rest
}) {
  const { isMobile } = useApplicationContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={backdropFilter} />
      <ModalContent
        borderRadius="0"
        minW="90%"
        mt={isMobile ? "20%" : "12vh"}
        mb="auto"
        mx="0"
        {...rest}
      >
        <ModalHeader p="0">
          {withoutCloseButton ? null : (
            <ModalCloseButton
              size="32px"
              color="white"
              top={isMobile ? "-15%" : "-8%"}
              right={isMobile ? "5%" : "-1.5%"}
            />
          )}
        </ModalHeader>
        <ModalBody p="0">
          <Flex justifyContent="center">{children}</Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
