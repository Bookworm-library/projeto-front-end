import {
    Box,
    Image,
    Text,
    UnorderedList,
    Flex,
    Heading,
    Stack,
    Button,
    ListItem
} from "@chakra-ui/react";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import unknownImage from "../../assets/img/no-image-item.png";
import { iBooks } from "../../contexts/searchContext/searchContext";
import { ListCard } from "../ListCard";

const CardsLibrary = () => {
    const { library } = useContext(SearchContext);

    return (
        <>
        <UnorderedList
            display={"flex"}
            gap="30px"
            w="100%"
            flexWrap={{sm:"nowrap", lg:"wrap"}}
            overflowX={{sm:"auto",lg:"hidden"}}
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
                return(
                    <ListCard key={element.id} element={element} buttonTitle={"Ver Livro"} />
                )
            })}
        </UnorderedList>
        </>
    );
    };
export default CardsLibrary;
