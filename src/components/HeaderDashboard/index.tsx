import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FormEvent, useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";

export const HeaderDashboard = () => {

  const navigate = useNavigate()
  const { submitSearch, setSearch } = useContext(SearchContext);

  const searchFunction = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    submitSearch();
  };

  return (
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
    >
      <Flex align="center" gap="20px">
        <Image src="../../src/assets/img/logo.svg" />
        <Heading color="#DAEEFA"> Bookworm Library</Heading>
      </Flex>
      <FormControl
        as="form"
        w="24rem"
        h="2.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        borderRadius="24px"
        onSubmit={(event) => {
          searchFunction(event);
        }}
      >
        <Input
          required
          type="text"
          placeholder="Pesquisar..."
          w="80%"
          h="90%"
          margin={0}
          p={0}
          border="none"
          _focus={{ border: "none" }}
          _focusVisible={{ border: "transparent", boxShadow: "none" }}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button
          type="submit"
          w="10%"
          h="90%"
          margin={0}
          p={0}
          bg="transparent"
          _focus={{ bg: "transparent" }}
          _hover={{ bg: "transparent" }}
        >
          <SearchIcon w="60%" h="60%" color={"blue.400"} />
        </Button>
      </FormControl>
      <Stack align="center" direction={"row"} color="white" gap="20px">
        <Button
          sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
          _hover={{ opacity: "0.7" }}
          bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          onClick={() => {
            navigate("/dashboard/biblioteca")
          }}
        >
          Biblioteca
        </Button>
        <Button
          sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
          _hover={{ opacity: "0.7" }}
          bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/")
          }}
        >
          Deslogar
        </Button>
      </Stack>
    </Flex>
  );
};
