import {
  Flex,
  Image,
  UnorderedList
} from "@chakra-ui/react";
import { useContext } from "react";
import boyandbook from "../../assets/img/boyandbook.jpg";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { HomeCard } from "../HomeCards";
import { ModalLibrary } from "../ModalLibrary";



const DashboardMain = () => {
  const { library, setCurrentBook, loading } = useContext(SearchContext);
  const { onOpen, isOpen, onClose } = useContextFunction();
  onClose()
  
  return (
    <>
      <UnorderedList
        w="100%"
        h="100vh"
        display="flex"
        gap="2.5rem"
        padding="1rem 2.5rem"
        bgImage="/src/assets/img/bgbooks.svg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        
      >
        {library?.map((element) => {
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
        <Image
          display={{ base: "none", sm: "none", lg: "block" }}
          h="670px"
          w="350px"
          src={boyandbook}
        />
      </UnorderedList>
      <ModalLibrary isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default DashboardMain;
