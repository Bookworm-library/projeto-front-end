import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export const AboutPage = () => {
  const devs = [
    {
      nome: "Gabriel Machado",
      github: "https://github.com/gabrielbrasilmachado",
      linkedin: "https://www.linkedin.com/in/gabrielbrasilmachado/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03GESXPZ9Q-9bf9ff823a8c-512",
      id: 1,
    },
    {
      nome: "Tawan Alencar",
      github: "https://github.com/TawanAlencar",
      linkedin: "https://www.linkedin.com/in/tawan-alencar-74011815b/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03CJMGT848-16a36b49f378-512",
      id: 2,
    },
    {
      nome: "Guilherme Felipe",
      github: "https://github.com/Guilherme-GFC",
      linkedin: "https://www.linkedin.com/in/gui-gfc/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03DM6NBGSV-bdbc1d9287c9-512",
      id: 3,
    },
    {
      nome: "Natan Silva",
      github: "https://github.com/NattanSilva",
      linkedin: "https://www.linkedin.com/in/nattansilva/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03FEM5Q0KB-ff45b0e17291-512",
      id: 4,
    },
    {
      nome: "Davi Moisés Silva",
      github: "https://github.com/davi894",
      linkedin: "https://www.linkedin.com/in/davi-moises-439a77210/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03BEB2UXK9-c0ae0f961053-512",
      id: 5,
    },
    {
      nome: "Guilherme Machado",
      github: "https://github.com/GuilhermeLink",
      linkedin: "https://www.linkedin.com/in/guilhermebmachado/",
      image: "https://ca.slack-edge.com/TQZR39SET-U03CUH0SE2E-502cc7d5b081-512",
      id: 6,
    },
  ];

  return (
    <>
      <Flex
        bgImage="./src/assets/img/bgbooks.svg"
        as="ul"
        w="100%"
        maxH="100vh"
        m="0 auto"
        wrap={"wrap"}
        gap="30px"
        justify="center"
        alignContent="flex-start"
      >
        {devs.map((dev) => {
          return (
            <Flex
              as="li"
              key={dev.id}
              width={{ sm: "90%", md: "45%", xl: "30%" }}
              maxW="500px"
              justify="flex-start"
              align="center"
              mt={{ sm: "0px", md: "30px" }}
              bgGradient="linear(to-t, cyan, blue.light)"
              p="20px 15px"
              borderRadius="8px"
            >
              <Image
                w={{ sm: "100px", md: "150px" }}
                h={{ sm: "100px", md: "150px" }}
                borderRadius="50%"
                src={dev.image}
                alt={dev.nome}
              />
              <VStack ml="10px">
                <Heading fontSize={{ sm: "1rem", md: "1.5rem" }} color="white">
                  {dev.nome}
                </Heading>
                <Link href={dev.linkedin} isExternal alignSelf="flex-start">
                  <Flex align="center" gap="10px">
                    <Image
                      src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
                      w="30px"
                      h="30px"
                    />{" "}
                    <Text
                      fontSize={{ sm: "0.8rem", md: "1.2rem" }}
                      fontWeight="600"
                    >
                      LinkedIn
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href={dev.github}
                  isExternal
                  textDecoration="none"
                  alignSelf="flex-start"
                >
                  <Flex align="center" gap="10px">
                    <Image
                      src="https://th.bing.com/th/id/R.724794164fb289dd2f7d69dde7ac3bc0?rik=0Ubh3aP6JzCPcw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG40.png&ehk=vDH1g6b2G5qphfQR7RsUJ7HmqSSwIMycien%2fvBj03ZU%3d&risl=&pid=ImgRaw&r=0"
                      w="30px"
                      h="30px"
                    />{" "}
                    <Text
                      fontSize={{ sm: "0.8rem", md: "1.2rem" }}
                      fontWeight="600"
                    >
                      GitHub
                    </Text>
                  </Flex>
                </Link>
              </VStack>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};
