import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { draw } from "./../../aminations/draw";

type Props = {};

export const MainPage: FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDarkMode = useColorModeValue(false, true);
  const { t } = useTranslation();

  const updateThemeColors = (isDarkMode: boolean) => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.style.setProperty("--text-color", "rgba(255, 255, 255, 1)");
      root.style.setProperty("--text-fill", "rgba(255, 255, 255, 0)");
    } else {
      root.style.setProperty("--text-color", "rgba(0, 0, 0, 1)");
      root.style.setProperty("--text-fill", "rgba(0, 0, 0, 0)");
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (context) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          draw(context, canvas.width, canvas.height);
        }
      }
    }
  }, []);

  useEffect(() => updateThemeColors(isDarkMode), [isDarkMode]);

  return (
    <>
      <Flex
        minH={{ base: `calc(100vh - 20vh)`, md: "100vh" }}
        w="100%"
        flexDir={{ base: "column" }}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "flex-end" }}
        pos="relative"
        fontWeight="bold"
        mb={{ base: "72px", md: "45px" }}
      >
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0 }}
        ></canvas>
        <Box
          position={"absolute"}
          top={0}
          right={"10.6vw"}
          w="7"
          h={{ base: "110vh", md: "140vh" }}
          background={"rgba(255, 255, 255, 0.23)"}
          boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
          backdropFilter={"blur(5px)"}
        />
        <Flex
          position="relative"
          display={"flex"}
          h="fit-content"
          w={{ md: "50vw" }}
          justifyContent="end"
          flexDir="column"
          fontSize={{ base: "9vw", sm: "5.5vw", md: "7vw" }}
        >
          <svg>
            <text x="58.5%" y="50%" dy=".35em" text-anchor="middle">
              {t("home.portfolio")}
            </text>
          </svg>
          <Text
            textAlign={"end"}
            className="text"
            fontSize={{ base: "3xl", md: "5.3vw" }}
          >
            {t("home.name")}
          </Text>
          <Text
            textAlign={"end"}
            className="text"
            fontSize={{ base: "xl", md: "2.9vw" }}
          >
            {t("home.dev")}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
