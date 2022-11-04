import {
    Box,
    Image,
    Text,
    UnorderedList,
    List,
    Flex,
    Heading,
    Stack,
    Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";


const CardsLibrary = () => {

    const {searchResults} = useContext(SearchContext)
    
    return (
        <>
            <UnorderedList display={"flex"} gap="30px" w="100%" flexWrap={"wrap"} >
                {searchResults?.map(element=>{
                return(
                    <List
                    border={"1px"}
                    padding="0px 20px"
                    bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
                    maxW="320px"
                    minW="320px"
                    maxH="250px"
                    minH={"250px"}
                    
                    >
                    <Flex align={"start"} p="10px">
                        <Image src={element.volumeInfo.imageLinks?.thumbnail} w="125px" h="168px" />
                        <Box 
                        p="0px 15px" 
                        color={"white"} 
                        overflow= "hidden"
                        
                        >
                            <Heading as="h3" fontSize={"20px"}>
                                Título:
                            </Heading>
                            <Text as="span" fontSize={"16px"}>
                            {element.volumeInfo.title}
                            </Text>
                            <Heading as="h3" fontSize={"20px"} marginTop="10px">
                                Autor:
                            </Heading>
                            <Text as="span" fontSize={"16px"}>
                            {element.volumeInfo.authors}
                            </Text>
                        </Box>
                    </Flex>
                    <Stack p="10px 0px">
                        <Button color="white" bg="#2C7AED" _hover={{ opacity: "0.7" }}>
                            Ver Livro
                        </Button>
                    </Stack>
                    </List>
                   )
                })}
            </UnorderedList>
        </>
    );
};
export default CardsLibrary;
