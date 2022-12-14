import { Heading, Image, UnorderedList, Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import boyandbook from "../../assets/img/boyandbook.jpg";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { HomeCard } from "../HomeCards";
import { ImBooks }  from "react-icons/im";
import { Modals } from "../Modals";
import bgImage from "../../assets/img/bgbooks.svg"

const DashboardMain = () => {
  const { wishList, recomended, setCurrentBook, setTypeModal, getInfoUserLogin, livrosRecomendados} =
    useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();
  useEffect(() => {livrosRecomendados(), getInfoUserLogin()},[])

  return (
    <>
      <UnorderedList
        w={{sm: "100vw", md: "95%" }}
        h="100vh"
        display="flex"
        justifyContent={{sm: "center", md: "space-between" }}
        gap="2.5rem"
        padding={{smHome: 0}}
        bgImage={bgImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        margin={"0"}
        marginLeft={"10px"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            border={"solid transparent"}
            w={{sm: "100%", md: "22.5rem" }}
            textAlign={"center"}
            bg={
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"
            }
            sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
            borderRadius="32px"
            as="h3"
            h={"40px"}
            marginBottom={"20px"}
            fontSize={{sm: "1.1rem", md: "1.6rem" }}
            fontWeight={"bold"}
            color={"#ffffff"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Livros Mais Votados:
          </Box>
          <Flex
            overflowX={"auto"}
            maxW={"65vw"}
            gap={"10px"}
            h="310px"
            w="890px"
  
            overflowY="hidden"
            css={{
              scrollbarWidth: "auto",
              scrollbarColor: "#2c7aed #ffffff",
              "::-webkit-scrollbar": {
                width: "12px",
                height:"12px"
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
                    setTypeModal(["tpWish", "tpLib"]);
                  }}
                />
              );
            }) : (<Flex
              display={"flex"} 
              justifyContent={"center"} 
              alignItems={"center"}
              fontSize={{sm: "22px", md: "36px"}}
              fontWeight={"bold"}
              height={"200px"}
              width={{sm: "100%", md: "80vw" }}>
              <ImBooks width={"50px"} fontSize={"22px"} />
              Nenhum livro por aqui ainda!
              </Flex>)}
          </Flex>
          <Box
            border={"solid transparent"}
            w={{sm: "100%", md: "22.5rem" }}
            textAlign={"center"}
            bg={
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"
            }
            sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
            borderRadius="32px"
            as="h3"
            h={"40px"}
            marginBottom={"20px"}
            fontSize={{sm: "1.1rem", md: "1.6rem" }}
            fontWeight={"bold"}
            color={"#ffffff"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Livros Desejados:
          </Box>

          <Flex
            overflowX={"auto"}
            overflowY="hidden"
            maxW={"65vw"}
            gap={"10px"}
            h="310px"
            w="890px"
            css={{
              scrollbarWidth: "auto",
              scrollbarColor: "#2c7aed #ffffff",
              "::-webkit-scrollbar": {
                width: "12px",
                height:"12px"
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
                    setTypeModal(["tpLib"]);
                  }}
                />
              );
            }) : (<Flex
              display={"flex"} justifyContent={"center"} 
              alignItems={"center"}
              fontSize={{sm: "22px", md: "36px"}} 
              fontWeight={"bold"}
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
      <Modals isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default DashboardMain;
