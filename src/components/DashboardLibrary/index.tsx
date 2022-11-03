import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  UnorderedList,
  Heading,
  Stack,
  Button,
  Image,
  Input,
  Box,
  List,
  Text,
} from "@chakra-ui/react";

const DashboardLibrary = () => {
  return (
    <Flex direction="column" h="100%" w="100%">
      <Flex
        as={"header"}
        w="100%"
        align="center"
        justify="space-between"
        p="5px 40px"
        m="0 auto"
        minH="100px"
        bg="#2C7AED"
        sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.507)" }}
        position="fixed"
        zIndex={"2"}
      >
        <Flex align="center" gap="20px">
          <Image src="../src/assets/img/logo.svg" />
          <Heading color="#DAEEFA"> Bookworm Library</Heading>
        </Flex>
        <Stack align="center" direction={"row"} color="white" gap="20px">
          <Flex bg="white" borderRadius="8px">
            <Input
              placeholder="Pesquisar"
              bg="white"
              border={"none"}
              focusBorderColor="transparent"
            />
            <Button bg="transparent" _hover={{ background: "transparent" }}>
              <Search2Icon color="#25b3a9" />
            </Button>
          </Flex>
          <Button
            sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
            _hover={{ opacity: "0.7" }}
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          >
            Home
          </Button>
          <Button
            sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
            _hover={{ opacity: "0.7" }}
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          >
            Sobre
          </Button>
          <Button
            sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
            _hover={{ opacity: "0.7" }}
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          >
            Deslogar
          </Button>
        </Stack>
      </Flex>

      <Flex
        as={"main"}
        bgImage="../src/assets/img/bgbooks.svg"
        h={"100%"}
        p={"20px"}
        w="100%"
      >
        <Box
          position="absolute"
          top={"8rem"}
          left="1rem"
          zIndex={"1"}
          border="2px"
          p="10px 40px"
          borderRadius="50px"
          bg="white"
        >
          <Heading color="#068AD9">Biblioteca:</Heading>
        </Box>
        <Flex  margin={"200px auto"} w="90%">
          <UnorderedList display={"flex"} gap="30px"   w="100%" flexWrap={"wrap"} >
            <List
            border={"2px"}
            padding="0px 20px"
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
            maxW="320px"
            minW="320px"
            maxH="250px"
            minH={"250px"}
            >
              <Flex
                
                align={"start"}
                p="10px"
              >
                <Image src="../src/assets/img/livro.svg" w="125px" h="168px" />
                <Box p="0px 15px" color={"white"}>
                  <Heading as="h3" fontSize={"20px"}>
                    Título:
                  </Heading>
                  <Text as="span" fontSize={"16px"}>
                    As 48 leis do poder
                  </Text>
                  <Heading as="h3" fontSize={"20px"} marginTop="10px" >
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
            <List
            border={"2px"}
            padding="0px 20px"
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
            maxW="320px"
            minW="320px"
            maxH="250px"
            minH={"250px"}
            >
              <Flex
                
                align={"start"}
                p="10px"
              >
                <Image src="../src/assets/img/livro.svg" w="125px" h="168px" />
                <Box p="0px 15px" color={"white"}>
                  <Heading as="h3" fontSize={"20px"}>
                    Título:
                  </Heading>
                  <Text as="span" fontSize={"16px"}>
                    As 48 leis do poder
                  </Text>
                  <Heading as="h3" fontSize={"20px"} marginTop="10px" >
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
            <List
            border={"2px"}
            padding="0px 20px"
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
            maxW="320px"
            minW="320px"
            maxH="250px"
            minH={"250px"}
            >
              <Flex
                
                align={"start"}
                p="10px"
              >
                <Image src="../src/assets/img/livro.svg" w="125px" h="168px" />
                <Box p="0px 15px" color={"white"}>
                  <Heading as="h3" fontSize={"20px"}>
                    Título:
                  </Heading>
                  <Text as="span" fontSize={"16px"}>
                    As 48 leis do poder
                  </Text>
                  <Heading as="h3" fontSize={"20px"} marginTop="10px" >
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
            <List
            border={"2px"}
            padding="0px 20px"
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
            maxW="320px"
            minW="320px"
            maxH="250px"
            minH={"250px"}
            >
              <Flex
                
                align={"start"}
                p="10px"
              >
                <Image src="../src/assets/img/livro.svg" w="125px" h="168px" />
                <Box p="0px 15px" color={"white"}>
                  <Heading as="h3" fontSize={"20px"}>
                    Título:
                  </Heading>
                  <Text as="span" fontSize={"16px"}>
                    As 48 leis do poder
                  </Text>
                  <Heading as="h3" fontSize={"20px"} marginTop="10px" >
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardLibrary;
