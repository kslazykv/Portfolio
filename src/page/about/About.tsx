import { FC } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { useTranslation } from "react-i18next";

type Props = {};

export const About: FC<Props> = (props) => {
  const { t } = useTranslation();
  const imagePath = `${process.env.PUBLIC_URL}/Me2.jpg`;

  return (
    <Wrapper title={`${t("about.title")}`} mb={10} id="about">
      <Image
        position={{ md: "absolute" }}
        left={{ md: "28vw" }}
        top={{ md: "20vh" }}
        w={{ md: "40vw" }}
        h={{ md: "70vh" }}
        mb={{ base: 10, md: 0 }}
        zIndex={1}
        src={imagePath}
        objectFit={"cover"}
        opacity={1}
        borderRadius={"md"}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      />
      <Flex
        w={{ md: "49vw" }}
        minH="75vh"
        ml={{ md: -10 }}
        p={{ base: 3, md: 10 }}
        background={"rgba(255, 255, 255, 0.23)"}
        borderRadius={"md"}
        boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={"blur(5px)"}
        border={"1px solid rgba(255, 255, 255, 0.3)"}
        zIndex={2}
      >
        <Text
          fontSize={{ base: "md", md: "xl" }}
          dangerouslySetInnerHTML={{ __html: t("about.text") }}
          mb={{ base: 10, md: 0 }}
          textAlign="justify"
        />
      </Flex>
    </Wrapper>
  );
};
