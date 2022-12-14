import { SearchIcon } from "@chakra-ui/icons";
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
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { IMenuButton, MenuMobile } from "../MenuMobile";
import logoSvg from "../../assets/img/logo.svg"

export const HeaderDashboard = () => {
  const navigate = useNavigate();
  const { submitSearch, setSearch, setLibrary, library } = useContext(SearchContext);
  const { setModalControl, onClose, setBVtnModalLoadingLogin } =
    useContextFunction();

  const searchFunction = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    submitSearch();
  };
  const buttonsDashboard: IMenuButton[] = [
    {
      buttonTitle: "Home",
      buttonAction: () => {
        navigate("/dashboard");
      },
    },
    {
      buttonTitle: "Biblioteca",
      buttonAction: () => {
        navigate("/dashboard/biblioteca");
      },
    },
    {
      buttonTitle: "Sobre",
      buttonAction: () => {
        navigate("/dashboard/sobre");
      },
    },
    {
      buttonTitle: "Deslogar",
      buttonAction: () => {
        localStorage.removeItem("@BookwordmLibrary:token");
        localStorage.removeItem("@BookwordmLibrary:userId");
        navigate("/");
        onClose();
        setBVtnModalLoadingLogin(false);
        setModalControl(false);
      },
    },
  ];

  return (
    <Flex
      as={"header"}
      w="100%"
      align="center"
      justify="space-between"
      p={{ base: "5px 10px", sm: "5px 20px", md: "5px 20px", lg: "5px 40px" }}
      m="0 auto"
      minH="100px"
      bg="#2C7AED"
      sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.507)" }}
      position="fixed"
      zIndex="2"
    >
      <Flex onClick={()=>{navigate("/dashboard")}} align="center" gap={{ sm: "10px", lg: "20px" }} _hover={{cursor: "pointer"}}>
        <Image
          src={logoSvg}
          w={{ base: "34px", md: "40px", lg: "48px" }}
        />
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "26px" }}
          color="#DAEEFA"
        >
          {" "}
          Bookworm Library
        </Heading>
      </Flex>
      <FormControl
        as="form"
        w="24rem"
        h="2.5rem"
        display={{ base: "none", sm: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="center"
        marginRight={{ lg: "1rem" }}
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
      <Stack
        display={{ base: "none", sm: "none", lg: "flex" }}
        align="center"
        direction={"row"}
        color="white"
        gap="20px"
      >
        <Button
          sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
          _hover={{ opacity: "0.7" }}
          bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          onClick={() => {
            setLibrary(library)
            navigate("/dashboard/biblioteca");
            onClose();
          }}
        >
          Biblioteca
        </Button>
        <Button
          sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
          _hover={{ opacity: "0.7" }}
          bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          onClick={() => {
            navigate("/dashboard/sobre");
            onClose()
          }}
        >
          Sobre
        </Button>
        <Button
          sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
          _hover={{ opacity: "0.7" }}
          bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          onClick={() => {
            localStorage.removeItem("@BookwordmLibrary:token");
            localStorage.removeItem("@BookwordmLibrary:userId");
            navigate("/");
            onClose();
            setBVtnModalLoadingLogin(false);
            setModalControl(false);
          }}
        >
          Deslogar
        </Button>
      </Stack>
      <MenuMobile buttons={buttonsDashboard} />
    </Flex>
  );
};
