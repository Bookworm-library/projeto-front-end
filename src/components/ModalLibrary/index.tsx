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
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";

interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLibrary = ({ isOpen, onClose }: iModalProps) => {
  const { currentBook, removeFromLibrary, addToRecomendedList } =
    useContext(SearchContext);

  return (
    <Modal
      blockScrollOnMount={false}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        minW={{ base: "300px", md: "450px" }}
        maxW={{ base: "300px", md: "450px" }}
        display="flex"
        flexDirection={"column"}
        flexWrap="wrap"
        color="white"
        bgGradient="linear(to-t, cyan, blue.light)"
      >
        <ModalHeader textAlign="center" color="white">
          Livro Selecionado
        </ModalHeader>
        <ModalCloseButton
          bg="#FFFFFF"
          color="#4552CE"
          _hover={{ bg: "#FFFFFF" }}
          fontWeight="bold"
        />

        <ModalBody>
          <Flex gap="20px">
            <Image
              maxW={{ base: "100px", md: "200px" }}
              src={
                currentBook?.volumeInfo.imageLinks
                  ? currentBook?.volumeInfo.imageLinks?.thumbnail
                  : unknownImage
              }
            />
            <Flex flexDir="column">
              <Heading as="h4" fontSize="1.25rem" color="white">
                Título:
              </Heading>

              <Text fontSize="1rem" color="white">
                {currentBook?.volumeInfo.title}
              </Text>

              <Heading mt="15px" as="h4" fontSize="1.25rem" color="white">
                Autor:
              </Heading>

              <Text fontSize="1rem" color="white">
                {currentBook?.volumeInfo.authors}
              </Text>
            </Flex>
          </Flex>
          <Box w="100%" mt="10px">
            <Heading as="h4" fontSize="1.25rem" m="8px">
              Sinopse:
            </Heading>
            <Text
              size="20px"
              p="10px"
              bg="white"
              color="black"
              borderRadius="4px"
              maxH="150px"
              overflowY="scroll"
              css={{
                scrollbarWidth: "auto",
                scrollbarColor: "#2c7aed #ffffff",
                "::-webkit-scrollbar": {
                  width: "12px",
                },
                "::-webkit-scrollbar-track": {
                  background: "#ffffff",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#2c7aed",
                  borderRadius: "10px",
                  border: "2px solid #ffffff",
                },
              }}
            >
              {currentBook?.volumeInfo.description ||
                "O título não possui uma descrição"}
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
            onClick={addToRecomendedList}
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
            onClick={(e) => {
              e.preventDefault();
              removeFromLibrary();
              onClose();
            }}
          >
            Exluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
