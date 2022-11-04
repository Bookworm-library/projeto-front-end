import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";

export const SearchList = () => {
  const { searchResults } = useContext(SearchContext);
  return (
    <UnorderedList
      listStyleType="none"
      display="flex"
      flexWrap="wrap"
      gap="2rem"
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
              margin={0}
              padding={"1rem"}
              marginBottom="1.5rem"
              bgGradient="linear(to-t, cyan, blue.light)"
              borderRadius="4px"
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
  );
};
