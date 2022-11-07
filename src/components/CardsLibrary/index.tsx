import {
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import unknownImage from "../../assets/img/no-image-item.png";
import { ModalLibrary } from "../ModalLibrary";
import { useContextFunction } from "../../contexts/userContext/userContext";

const CardsLibrary = () => {
  const { library, setCurrentBook, loading } = useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();

  return library?.length === 0 ? (
    <h2> Você não possui livros na sua biblioteca! </h2>
  ) : (
    <>
      <UnorderedList
        display={"flex"}
        gap="30px"
        w="100%"
        flexWrap={"wrap"}
        h="900px"
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
        {library?.map((element: any) => {
          return (
            <ListItem
              key={element.id}
              w="30%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="1.5rem"
              margin={0}
              padding={"1rem"}
              marginBottom="1.5rem"
              bgGradient="linear(to-t, cyan, blue.light)"
              borderRadius="4px"
            >
              <Flex align={"start"} p="10px">
                <Image
                  src={
                    element.volumeInfo?.imageLinks
                      ? element.volumeInfo.imageLinks?.thumbnail
                      : unknownImage
                  }
                  w="8.25rem"
                  h="12.5rem"
                  margin={0}
                  padding={0}
                />
                <Box p="0px 15px" color={"white"} overflow="hidden">
                  <Heading as="h3" fontSize={"20px"}>
                    Título:
                  </Heading>
                  <Text as="span" fontSize={"16px"} noOfLines={[1, 2, 3]}>
                    {element.volumeInfo?.title}
                  </Text>
                  <Heading as="h3" fontSize={"20px"} marginTop="10px">
                    Autor:
                  </Heading>
                  <Text as="span" fontSize={"16px"} noOfLines={[1]}>
                    {element.volumeInfo?.authors}
                  </Text>
                </Box>
              </Flex>
              <Stack p="10px 0px">
                <Button
                  color="white"
                  bg="#2C7AED"
                  _hover={{ opacity: "0.7" }}
                  w="13.75rem"
                  h="2.625rem"
                  onClick={(e) => {
                    e.preventDefault;
                    onOpen();
                    setCurrentBook(element);
                  }}
                >
                  Ver Livro
                </Button>
                <ModalLibrary isOpen={isOpen} onClose={onClose} />
              </Stack>
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
};
export default CardsLibrary;
