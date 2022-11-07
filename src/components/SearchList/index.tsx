import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";

export const SearchList = () => {
  const {
    searchResults,
    currentBook,
    setCurrentBook,
    addToWishlist,
    addToLibrary
  } = useContext(SearchContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap="2rem"
        h={"100%"}
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
              width: "4px",
          },
          "&::-webkit-scrollbar-track": {
              width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
          },
          }}
      >
        {searchResults?.length !== 0 ? (
          searchResults?.map((item) => {
            return (
              <ListItem
                key={item.id}
                w="30%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="1.5rem"
                margin={"0"}
                padding={"1rem"}
                marginBottom="1.5rem"
                bgGradient="linear(to-t, cyan, blue.light)"
                borderRadius="4px"
                maxW={"320px"}
                minW="320px"
                minH="20.5rem"
                maxH="20.5rem"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  gap="12px"
                >
                  <Box w="8.25rem" h="12.5rem">
                    <Image
                      src={
                        item.volumeInfo.imageLinks
                          ? item.volumeInfo.imageLinks?.thumbnail
                          : unknownImage
                      }
                      w="100%"
                      h="100%"
                      margin={0}
                      padding={0}
                    />
                  </Box>
                  <Box
                    w="40"
                    maxW="60%"
                    display="flex"
                    flexDirection="column"
                    gap="1rem"
                  >
                    <Box>
                      <Heading as="h4" fontSize="1.25rem" color="white">
                        Título:
                      </Heading>
                      <Text
                        as="p"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="1rem"
                        color="white"
                      >
                        {item.volumeInfo.title}
                      </Text>
                    </Box>
                    <Box>
                      <Heading as="h4" fontSize="1.25rem" color="white">
                        Autor:
                      </Heading>
                      <Text
                        as="p"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontSize="1rem"
                        color="white"
                      >
                        {item.volumeInfo.authors}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Button
                  type="button"
                  w="13.75rem"
                  h="2.625rem"
                  color="white"
                  bg="blue.dark"
                  _hover={{ bg: "blue.dark" }}
                  _focus={{ bg: "blue.dark" }}
                  onClick={() => {
                    setCurrentBook(item);
                    onOpen();
                  }}
                >
                  Adicionar a biblioteca
                </Button>
              </ListItem>
            );
          })
        ) : (
          <ListItem>Lista Vazia!</ListItem>
        )}
      </UnorderedList>
      <Modal
        blockScrollOnMount={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bgGradient="linear(to-t, cyan, blue.light)"
          borderRadius="4px"
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
                src={
                  currentBook?.volumeInfo.imageLinks
                    ? currentBook.volumeInfo.imageLinks?.thumbnail
                    : unknownImage
                }
              ></Image>
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
            <Box
              mt="10px"
              bg="white"
              padding="10px"
              maxH="150px"
              overflowY="scroll"
              borderRadius="4px"
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
              <Text fontSize="1rem">
                {currentBook?.volumeInfo.description
                  ? currentBook?.volumeInfo.description
                  : "O título não possui uma descrição"}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter display="flex" flexDir="column" gap="10px">
            <Button onClick={addToWishlist} bg="blue.dark" color="white">
              Adicionar à lista de desejos
            </Button>
            <Button onClick={addToLibrary} bg="blue.dark" color="white">
              Adicionar à biblioteca
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
