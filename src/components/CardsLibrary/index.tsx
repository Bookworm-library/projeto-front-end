import {
    Box,
    Image,
    Text,
    UnorderedList,
    Flex,
    Heading,
    Stack,
    Button,
    ListItem
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import unknownImage from "../../assets/img/no-image-item.png";
import { iBooks } from "../../contexts/searchContext/searchContext";

const CardsLibrary = () => {
    const { library } = useContext(SearchContext);

    return (
        <>
        <UnorderedList
            display={"flex"}
            gap="30px"
            w="100%"
            flexWrap={"wrap"}
            overflowY="auto"
            h="100% "           
            alignItems={"center"}
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
            {library?.map((element: iBooks) => {
            return (
                <ListItem
                key={element.id}
                width={"30%"}
                display="flex"
                flexDirection="column"
                alignItems="center"
                margin={0}
                padding={"1rem"}
                marginBottom="1.5rem"
                bgGradient="linear(to-t, cyan, blue.light)"
                borderRadius="4px"
                maxW={"320px"}
                minW="320px"
                minH="20.5rem"
                maxH="20.5rem"
                >
                <Flex align={"start"} p="10px">
                    <Image
                    src={
                        element.volumeInfo.imageLinks
                        ? element.volumeInfo.imageLinks?.thumbnail
                        : unknownImage
                    }
                    minW="8.25rem"
                    minH="12.5rem"
                    margin={0}
                    padding={0}
                    />
                    <Box p="0px 15px" color={"white"} overflow="hidden">
                    <Heading as="h3" fontSize={"20px"}>
                        Título:
                    </Heading>
                    <Text as="span" fontSize={"16px"} noOfLines={[1, 2, 3]}>
                        {element.volumeInfo.title}
                    </Text>
                    <Heading as="h3" fontSize={"20px"} marginTop="10px">
                        Autor:
                    </Heading>
                    <Text as="span" fontSize={"16px"} noOfLines={[1]}>
                        {element.volumeInfo.authors}
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
                    >
                    Ver Livro
                    </Button>
                </Stack>
                </ListItem>
            );
            })}
        </UnorderedList>
        </>
    );
    };
export default CardsLibrary;
