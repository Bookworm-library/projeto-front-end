import {
  Box,
  Flex,
  Heading,
  Image,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext } from "react";
import boyandbook from "../../assets/img/boyandbook.jpg";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { HomeCard } from "../HomeCards";
import { ModalLibrary } from "../ModalLibrary";
import { ImBooks }  from "react-icons/im";



const DashboardMain = () => {
  const { wishList, recomended, setCurrentBook, loading } = useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();

  return (
    <>
      <UnorderedList
        w="100%"
        h="100vh"
        display="flex"
        justifyContent={"space-between"}
        gap="2.5rem"
        padding="1rem 2.5rem"
        bgImage="/src/assets/img/bgbooks.svg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        margin={"0"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            border={"solid transparent"}
            w={"22.5rem"}
            textAlign={"center"}
            bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
            sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
            borderRadius="32px"
            as="h3"
            h={"40px"}
            marginBottom={"20px"}
            fontSize="1.6rem"
            fontWeight={"bold"}
            color={"#ffffff"}
            display="flex"
            alignItems="center"
            justifyContent="center"

          >
            Livros Mais Votados:
          </Box>
          <Flex overflowX={"auto"} gap={"10px" } h ="310px" w="890px" overflowY="hidden"
            css={{
              scrollbarWidth: "auto",
              scrollbarColor: "#2c7aed #ffffff",
              "::-webkit-scrollbar": {
                width: "12px",
              },
              "::-webkit-scrollbar-track": {
                background: "#ffffff",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2c7aed",
                borderRadius: "10px",
                border: "2px solid #ffffff",
              },
            }}
          >
            {recomended?.length ? recomended?.map((element) => {
              return (
                <HomeCard
                  key={element.id}
                  element={element}
                  buttonTitle={"Ver Livro"}
                  itemAction={() => {
                    setCurrentBook(element);
                    onOpen();
                  }} />
              );
            }) : (<Flex
              display={"flex"} justifyContent={"center"} 
              alignItems={"center"}
              fontSize={"36px"} fontWeight={"bold"}
              height={"200px"}
              width={"80vw"}>
              <ImBooks />
              Nenhum livro por aqui ainda!
              </Flex>)
              }
          </Flex>


          <Box
            border={"solid transparent"}
            w={"22.5rem"}
            textAlign={"center"}
            bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
            sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
            borderRadius="32px"
            as="h3"
            h={"40px"}
            marginBottom={"20px"}
            fontSize="1.6rem"
            fontWeight={"bold"}
            color={"#ffffff"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Livros Desejados:
          </Box>
          <Flex overflowX={"scroll"} overflowY="hidden" gap={"10px"} h ="310px" w="890px"
            css={{
              scrollbarWidth: "auto",
              scrollbarColor: "#2c7aed #ffffff",
              "::-webkit-scrollbar": {
                width: "12px",
              },
              "::-webkit-scrollbar-track": {
                background: "#ffffff",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2c7aed",
                borderRadius: "10px",
                border: "2px solid #ffffff",
              },
            }}
          >
            {wishList?.length ? wishList?.map((element) => {
              return (
                <HomeCard
                  key={element.id}
                  element={element}
                  buttonTitle={"Ver Livro"}
                  itemAction={() => {
                    setCurrentBook(element);
                    onOpen();
                  }} />

              );
            }) : (<Flex
              display={"flex"} justifyContent={"center"} 
              alignItems={"center"}
              fontSize={"36px"} fontWeight={"bold"}
              height={"200px"}
              width={"80vw"}>
              <ImBooks />
              Nenhum livro por aqui ainda!
              </Flex>)
              }
          </Flex>
        </Box>
        <Flex>
          <Image
            display={{ base: "none", sm: "none", md: "none", lg: "none", xlHome:"block" , xl: "none" }}
            h={"95%"}
            minH="610px"
            maxH={"700px"}
            w="350px"
            src={boyandbook}
          />
        </Flex>
      </UnorderedList>
      <ModalLibrary isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default DashboardMain;


/* import {
  Flex,
  Heading,
  Box,
  Image,
  UnorderedList
} from "@chakra-ui/react";
import { useContext } from "react";
import boyandbook from "../../assets/img/boyandbook.jpg";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { HomeCard } from "../HomeCards";
import { ModalLibrary } from "../ModalLibrary";
​
​
​
const DashboardMain = () => {
  const { wishList,recomended, setCurrentBook, loading } = useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();
​
  return (
    <>
    <UnorderedList
      w="100%"
      h="100vh"
      display="flex"
      justifyContent={"space-between"}
      gap="2.5rem"
      padding="1rem 2.5rem"
      bgImage="/src/assets/img/bgbooks.svg"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      
      
    >
      <Box display={"flex"} flexDirection={"column"}>
      <Box 
        border={"solid transparent"} 
        w={"22.5rem"} 
        textAlign={"center"} 
        bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
        sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
        borderRadius="32px"
        as="h3" 
        h={"40px"}
        marginBottom={"20px"}
        fontSize="1.6rem"
        fontWeight={"bold"}
        color={"#ffffff"}
        display="flex"
        alignItems="center"
        justifyContent="center" 
        >
          Livros Mais Votados:
        </Box> 
        <Flex overflowX={"scroll"} maxW={"65vw"} gap={"10px"}>
        {recomended?.map((element) => {
            return (
              <HomeCard 
              key={element.id}
              element={element}
              buttonTitle={"Ver Livro"}
              itemAction={() => {
                setCurrentBook(element);
                onOpen();
              }}/>
            );
          })}
        </Flex> 
​
​
        <Box 
        border={"solid transparent"} 
        w={"22.5rem"} 
        textAlign={"center"} 
        bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
        sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
        borderRadius="32px"
        as="h3" 
        h={"40px"}
        marginBottom={"20px"}
        fontSize="1.6rem"
        fontWeight={"bold"}
        color={"#ffffff"}
        display="flex"
        alignItems="center"
        justifyContent="center" 
        >
          Livros Desejados:
        </Box>  
        <Flex overflowX={"scroll"} maxW={"65vw"} gap={"10px"}>
        {wishList?.map((element) => {
            return (
              <HomeCard 
              key={element.id}
              element={element}
              buttonTitle={"Ver Livro"}
              itemAction={() => {
                setCurrentBook(element);
                onOpen();
              }}/>
              
            );
          })}
        </Flex> 
      </Box>
      <Flex>
        <Image
          display={{ base: "none", sm: "none", lg: "block" }}
          h="670px"
          w="350px"
          src={boyandbook}
          />
      </Flex> 
    </UnorderedList>
    <ModalLibrary isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default DashboardMain; */