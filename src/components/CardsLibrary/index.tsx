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

const CardsLibrary = () => {
    return (
        <>
            <UnorderedList display={"flex"} gap="30px" w="100%" flexWrap={"wrap"}>
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
                    <Image src="../src/assets/img/livro.svg" w="125px" h="168px" />
                    <Box p="0px 15px" color={"white"}>
                    <Heading as="h3" fontSize={"20px"}>
                        Título:
                    </Heading>
                    <Text as="span" fontSize={"16px"}>
                        As 48 leis do poder
                    </Text>
                    <Heading as="h3" fontSize={"20px"} marginTop="10px">
                        Autor:
                    </Heading>
                    <Text as="span" fontSize={"16px"}>
                        Robert Greene
                    </Text>
                    </Box>
                </Flex>
                <Stack p="10px 0px">
                    <Button color="white" bg="#2C7AED" _hover={{ opacity: "0.7" }}>
                    Adicionar
                    </Button>
                </Stack>
                </List>
            </UnorderedList>
        </>
    );
};
export default CardsLibrary;
