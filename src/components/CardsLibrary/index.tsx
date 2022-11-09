import { UnorderedList, Flex } from "@chakra-ui/react";
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
        h={{ base: "550px", "2xl": "800px" }}
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
        {library?.length ? (
          library?.map((element: iBooks) => {
            return (
              <ListCard
                key={element.id}
                element={element}
                buttonTitle={"Ver Livro"}
                itemAction={() => {
                  setCurrentBook(element);
                  onOpen();
                  setTypeModal(["tpRecom", "tpRemove"]);
                }}
              />
            );
          })
        ) : (
          <Flex
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"46px"}
            fontWeight={"bold"}
            height={"300px"}
            width={"80vw"}
          >
            <ImBooks />
            Nenhum livro por aqui ainda!
          </Flex>
        )}
      </UnorderedList>
      <Modals isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CardsLibrary;
