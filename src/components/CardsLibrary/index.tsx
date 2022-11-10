import {
  Box,
  UnorderedList,
  Flex
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { iBooks } from "../../contexts/searchContext/searchContext";
import { ListCard } from "../ListCard";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { Modals } from "../Modals";
import { ImBooks } from "react-icons/im";

const CardsLibrary = () => {
  const { library, setCurrentBook, typeModal, setTypeModal } =
    useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();

  return (
    <>
      <UnorderedList
        display={"flex"}
        gap="30px"
        w="100%"
        flexWrap={{ sm: "nowrap", lg: "wrap", xl: "wrap" }}
        overflowX={{ sm: "auto", mb: "hidden", lg: "hidden" }}
        overflowY="auto"
        h={"100%"}
        flexDirection={{ base: "column", lg: "row" }}
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
        {library?.length ? library?.map((element: iBooks) => 
        {
          return (
            <ListCard key={element.id} element={element} buttonTitle={"Ver Livro"} itemAction={() => {
              onOpen();
              setTypeModal(["tpRecom","tpRemove"])
              setCurrentBook(element);
            }} />) 
        }
        ) : (<Flex
            display={"flex"} 
            justifyContent={"center"} 
            alignItems={"center"}
            fontSize={{sm: "22px", md:"36px",lg: "46px" }} fontWeight={"bold"}
            height={"300px"}
            width={"80vw"}>
            <Box 
            w={"100%"} 
            display={"flex"} 
            justifyContent={"center"} 
            alignItems={"center"}>
              <ImBooks/>
              Nenhum livro por aqui ainda!
            </Box>  
            </Flex>)
            }
      </UnorderedList>
      <Modals isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CardsLibrary;
