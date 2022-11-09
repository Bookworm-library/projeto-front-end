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
import { ListCard } from "../ListCard";
import { ImBooks } from "react-icons/im";
import { Modals } from "../Modals";

export const SearchList = () => {
  const { searchResults, setCurrentBook } = useContext(SearchContext);

  const { onOpen } = useDisclosure();

  return (
    <>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap="2rem"
        h={"80vh"}
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
        {searchResults?.length ? (
          searchResults?.map((element) => {
            return (
              <ListCard
                key={element.id}
                element={element}
                buttonTitle={"Ver Livro"}
                itemAction={() => {
                  setCurrentBook(element);
                  onOpen();
                }}
              />
            );
          })
        ) : (
          <ListItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"46px"}
            fontWeight={"bold"}
            height={"300px"}
            width={"80vw"}
          >
            <ImBooks />
            Nenhum livro por aqui ainda!
          </ListItem>
        )}
      </UnorderedList>
      <Modals type={["tpWish", "tpLib"]} />
      {/* <Modal
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
            <Box w="100%" mt="10px">
              <Heading as="h4" fontSize="1.25rem" m="8px" color="white">
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
            <Button onClick={addToWishlist} bg="blue.dark" color="white">
              Adicionar à lista de desejos
            </Button>
            <Button onClick={addToLibrary} bg="blue.dark" color="white">
              Adicionar à biblioteca
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};
