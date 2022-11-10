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
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { ModalButton } from "../ModalButton";

interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modals = ({ isOpen, onClose }: iModalProps) => {
  const {
    currentBook,
    addToWishlist,
    addToLibrary,
    removeFromLibrary,
    addToRecomendedList,
    typeModal,
    livrosRecomendados
  } = useContext(SearchContext);

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

        <ModalFooter display="flex" flexDir="column" gap="10px">
          {typeModal.includes("tpWish") && (
            <ModalButton
              buttonTitle="Adicionar à lista de desejos"
              buttonAction={addToWishlist}
            />
          )}

          {typeModal.includes("tpLib") && (
            <ModalButton
              buttonTitle="Adicionar à biblioteca"
              buttonAction={addToLibrary}
            />
          )}

          {typeModal.includes("tpRecom") && (
            <ModalButton
              buttonTitle="Recomendar"
              buttonAction={
                addToRecomendedList
              }
            />
          )}

          {typeModal.includes("tpRemove") && (
            <ModalButton
              buttonTitle="Excluir"
              buttonAction={removeFromLibrary}
              style="remove"
            />
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
