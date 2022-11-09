import { SearchIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { FormEvent, useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";

export const Searchbar = () => {
  const { submitSearch, setSearch } = useContext(SearchContext);
  const searchFunction = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    submitSearch();
  };
  return (
    <FormControl
      as="form"
      w="90%"
      h="2.5rem"
      display={{ sm: "flex", lg: "none" }}
      alignItems="center"
      justifyContent="center"
      marginRight={{ lg: "1rem" }}
      bg="white"
      borderRadius="24px"
      border="1px solid black"
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
  );
};
