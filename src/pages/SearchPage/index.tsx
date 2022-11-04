import { Box, Flex, Heading } from "@chakra-ui/react";
import { SearchList } from "../../components/SeacrhList";

export const SearchPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      gap="2.5rem"
      padding="1rem 2.5rem"
      bgImage="/src/assets/img/bgbooks.svg"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        w="22.5rem"
        h="3rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="2px"
        borderColor="black"
        borderRadius="32px"
        bg="white"
      >
        <Heading as="h3" fontSize="2rem" color="blue.light">
          Livros pesquisados:
        </Heading>
      </Box>
      <SearchList />
    </Flex>
  );
};
