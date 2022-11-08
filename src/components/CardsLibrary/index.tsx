import { UnorderedList } from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { iBooks } from "../../contexts/searchContext/searchContext";
import { ListCard } from "../ListCard";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { ModalLibrary } from "../ModalLibrary";

const CardsLibrary = () => {
  const { library, setCurrentBook, loading } = useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();

  return (
    <>
      <UnorderedList
        display={"flex"}
        gap="30px"
        w="100%"
        flexWrap={{ sm: "nowrap", lg: "wrap" }}
        overflowX={{ sm: "auto", lg: "hidden" }}
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
            <ListCard
              key={element.id}
              element={element}
              buttonTitle={"Ver Livro"}
              itemAction={() => {
                setCurrentBook(element);
                onOpen();
              }}
            />
          );
        })}
      </UnorderedList>
      <ModalLibrary isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CardsLibrary;
