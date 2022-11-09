
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Stack,
  Text
} from "@chakra-ui/react";
import unknownImage from "../../assets/img/no-image-item.png";
import { IListCardProps } from "../ListCard";
export const HomeCard =  ({
  element,
  buttonTitle,
  itemAction,
}: IListCardProps) => {
  return (
      <ListItem
          bgGradient="linear(to-t, cyan, blue.light)"
          key={element.id}
          width={{ md: "30%", lg: "30%", xl: "23%" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin={0}
          padding={"1rem"}
          marginBottom="1.5rem"
          borderRadius="4px"
          w={"300px"}
          h={"280px"}
          

        >
          <Flex align={"center"} p="10px" flexDirection={"column"} >
            <Box>
              <Image
                src={
                  element.volumeInfo.imageLinks
                    ? element.volumeInfo.imageLinks?.thumbnail
                    : unknownImage
                }
                minW="8rem"
                maxH="8rem"
                h="8rem"
                margin={0}
                padding={0}
              />
            </Box>
            <Box color={"white"} overflow="hidden">
              <Text as="span" fontSize={"16px"} fontWeight={"bold"} noOfLines={[1, 2]}
              width={"100%"}>
                {element.volumeInfo.title}
              </Text>
              <Text as="span" fontSize={"16px"} noOfLines={[1]}>
                {element.volumeInfo.authors}
              </Text>
            </Box>
          </Flex>
          <Stack p="10px 0px">
            <Button
              color="white"
              bg="#2C7AED"
              _hover={{ opacity: "0.7" }}
              w="8rem"
              h="2.625rem"
              onClick={itemAction}
            >
              {buttonTitle}
            </Button>
          </Stack>
        </ListItem>
  )
}