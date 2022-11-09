import { Box, Flex, Heading } from "@chakra-ui/react";
import { SearchList } from "../../components/SearchList";

export const SearchPage = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      gap="2.5rem"
      bgImage="/src/assets/img/bgbooks.svg"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100%"
      padding={{base:"0",lg:"1rem 2.5rem"}}
      

    >
      <Box
        w="22.5rem"       
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderColor="black"
        borderRadius="32px"
        maxW="300px"
        bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
        sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
        margin={{base:"0 auto",md:"0",lg:"0"}}
      >
        <Heading 
        as="h3" 
        h={"40px"}
        fontSize="1.6rem" 
        color="#FFFFFF"  
        display="flex"
        alignItems="center"
        justifyContent="center"               
        >
          Livros pesquisados:
        </Heading>
      </Box>
      <Flex  margin={"auto"} w="86.7%" >  
        <SearchList  />
      </Flex>
    </Flex>
  );
};
