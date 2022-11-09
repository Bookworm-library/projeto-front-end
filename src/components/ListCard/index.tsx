import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import unknownImage from "../../assets/img/no-image-item.png";
import { iBooks } from "../../contexts/searchContext/searchContext";

export interface IListCardProps {
  buttonTitle: string;
  element: iBooks;
  itemAction?: () => void;
}

export const ListCard = ({
  element,
  buttonTitle,
  itemAction,
}: IListCardProps) => {
  return (
    <ListItem
      key={element.id}
      width={{ md: "30%", lg: "30%", xl: "23%" }}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      margin={0}
      padding={"1rem"}
      marginBottom="1.5rem"
      bgGradient="linear(to-t, cyan, blue.light)"
      borderRadius="4px"
      maxW={"320px"}
      w={{ base: "255px", sm: "255px", md: "300px", lg: "320px", xl: "320px" }}
      h={{ base: "14.6rem", lg: "20.5rem" }}
      maxH="20.5rem"
    >
      <Flex align={"start"} p="10px">
        <Image
          src={
            element.volumeInfo.imageLinks
              ? element.volumeInfo.imageLinks?.thumbnail
              : unknownImage
          }
          w={{ base: "5rem", lg: "8.25rem" }}
          h={{ base: "8rem", lg: "12.5rem" }}
          margin={0}
          padding={0}
        />
        <Box p="0px 15px" color={"white"} overflow="hidden">
          <Heading as="h3" fontSize={{ base: "16px", lg: "20px" }}>
            Título:
          </Heading>
          <Text
            as="span"
            fontSize={{ base: "12px", lg: "16px" }}
            maxW={"90px"}
            noOfLines={[1, 2, 3]}
          >
            {element.volumeInfo.title}
          </Text>
          <Heading
            as="h3"
            fontSize={{ base: "16px", lg: "20px" }}
            marginTop="10px"
          >
            Autor:
          </Heading>
          <Text
            as="span"
            fontSize={{ base: "12px", lg: "16px" }}
            noOfLines={[1]}
          >
            {element.volumeInfo.authors}
          </Text>
        </Box>
      </Flex>
      <Stack p="10px 0px">
        <Button
          color="white"
          bg="#2C7AED"
          _hover={{ opacity: "0.7" }}
          w="13.75rem"
          h="2.625rem"
          onClick={itemAction}
        >
          {buttonTitle}
        </Button>
      </Stack>
    </ListItem>
  );
};
