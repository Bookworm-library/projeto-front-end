import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Text,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";

interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLibrary = ({ isOpen, onClose }: iModalProps) => {
  const { currentBook } = useContext(SearchContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        minW={{ base: "300px", lg: "950px" }}
        maxW={{ base: "300px", lg: "950px" }}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        flexWrap="wrap"
        color="white"
        bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
      >
        <ModalHeader
          display="flex"
          gap="10px"
          minW={{ base: "100%", lg: "50%" }}
          maxW="inherit"
        >
          <Image
            maxW={{ base: "100px", lg: "200px" }}
            src={
              currentBook?.volumeInfo.imageLinks
                ? currentBook?.volumeInfo.imageLinks?.thumbnail
                : unknownImage
            }
          />
          <Box
            display="flex"
            gap="17px"
            flexDirection="column"
            maxW="inherit"
            overflow="auto"
          >
            <Heading as="h2" size="24px">
              Titulo:
            </Heading>
            <Text
              size="20px"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {currentBook?.volumeInfo.title}
            </Text>
            <Heading as="h2" size="24px">
              Autor:
            </Heading>
            <Text
              size="20px"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {currentBook?.volumeInfo.authors}
            </Text>
          </Box>
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <Heading as="h2" size="24px" m="8px">
              Sinopse:
            </Heading>
            <Text
              size="20px"
              p="10px"
              bg="white"
              color="black"
              borderRadius="4px"
            >
              {currentBook?.volumeInfo.description || "Não há nada aqui"}
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter
          w="100%"
          flexDirection="row"
          alignItems="baseline"
          justifyContent="space-between"
          gap="15px"
        >
          <Button
            type="button"
            borderStyle="4px"
            mt="10px"
            w="100%"
            bg="white"
            color="black"
            _hover={{ opacity: "0.7" }}
            alignSelf="end"
          >
            Recomendar
          </Button>

          <Button
            type="button"
            borderStyle="4px"
            mt="10px"
            w="100%"
            bg="red"
            color="white"
            _hover={{ opacity: "0.7" }}
            alignSelf="end"
          >
            Exluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
