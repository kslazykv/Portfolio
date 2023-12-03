import { Box, Container, useColorMode } from "@chakra-ui/react";
import { ReactNode, Suspense, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Loader } from "../page/loader/Loader";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  const bgLight = `${process.env.PUBLIC_URL}/background_light.png`;
  const bgDark = `${process.env.PUBLIC_URL}/background_dark.png`;

  const [bgImage, setBgImage] = useState(
    colorMode === "light" ? bgLight : bgDark
  );

  useEffect(() => {
    const newBgImage = colorMode === "light" ? bgLight : bgDark;
    const timeoutId = setTimeout(() => {
      setBgImage(newBgImage);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [colorMode, bgLight, bgDark]);

  return (
    <Suspense fallback={<Loader />}>
      <Nav />
      <Box
        mt={{ base: "-72px", md: "-45px" }}
        bgImage={bgImage}
        backgroundSize={{ base:  "cover" }}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        backgroundAttachment={{base:"fixed",md:'scroll'}}
        overflow={"hidden"}
        zIndex={-1}
        transition="background-image 0.8s ease-in-out"
      >
        <Container
          display="flex"
          flexDir="column"
          maxW="container.xl"
          pos="relative"
          zIndex={1}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </Suspense>
  );
};
