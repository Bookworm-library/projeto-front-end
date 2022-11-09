import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import unknownImage from "../../assets/img/no-image-item.png";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { ListCard } from "../ListCard";
import { ImBooks } from "react-icons/im";
import { Modals } from "../Modals";

export const SearchList = () => {
  const { searchResults, setCurrentBook } = useContext(SearchContext);

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <UnorderedList
        listStyleType="none"
        display="flex"
        flexWrap="wrap"
        gap="2rem"
        h={"80vh"}
        overflowY="auto"
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
                }}
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
      <Modals type={["tpWish", "tpLib"]} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
