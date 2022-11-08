import {
  Flex,
  Image,
  UnorderedList
} from "@chakra-ui/react";
import { useContext } from "react";
import boyandbook from "../../assets/img/boyandbook.jpg";
import { SearchContext } from "../../contexts/searchContext/searchContext";
import { HomeCard } from "../HomeCards";



const DashboardMain = () => {
  const { library } = useContext(SearchContext);

  return (
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
          <HomeCard key={element.id} element={element} buttonTitle="Ver Livro" />
        );
      })}
      <Image
        display={{ base: "none", sm: "none", lg: "block" }}
        h="670px"
        w="350px"
        src={boyandbook}
      />
    </UnorderedList>
  );
};
export default DashboardMain;
