import { ListItem, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { ListCard } from "../ListCard";
import { ImBooks } from "react-icons/im";
import { Modals } from "../Modals";

export const SearchList = () => {
  const { searchResults, setCurrentBook, setTypeModal } =
    useContext(SearchContext);

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <UnorderedList
        display={"flex"}
        gap="30px"
        w="100%"
        flexWrap={{ sm: "nowrap",lg: "wrap" ,xl:"wrap"}}
        overflowX={{ sm: "auto", mb:"hidden",lg: "hidden" }}
        overflowY="auto"
        h={{base:"550px", "2xl":"800px"}}
        flexDirection={{base:"column",lg:"row"}}
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
        {searchResults?.length ? (
          searchResults?.map((element) => {
            return (
              <ListCard
                key={element.id}
                element={element}
                buttonTitle={"Ver Livro"}
                itemAction={() => {
                  setCurrentBook(element);
                  onOpen();
                  setTypeModal(["tpLib", "tpWish"]);}}
              />
            );
          })
        ) : (
          <ListItem
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
          </ListItem>
        )}
      </UnorderedList>
      <Modals isOpen={isOpen} onClose={onClose} />
    </>
  );
};





