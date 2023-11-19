import { FC } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { ContentBox } from "./ContentBox";
import { ButtonsGrup } from "./ButtonsGrup";

type Props = {
  title?: string;
  subtitle?: string;
  text: string;
  textBottom?: string;
  textRight?: string;
  image?: string;
  link?: string;
  code?: string;
  inProgres?: boolean;
};

export const ProjectBox: FC<Props> = (props) => {
  const {
    title,
    subtitle,
    text,
    textBottom,
    textRight,
    image,
    link,
    code,
    inProgres = false,
    ...rest
  } = props;

  return (
    <Flex
      dir="column"
      flexDir="column"
      w={{ base: "95%", md: "300px" }}
      borderRadius={"xl"}
      overflow={"hidden"}
      bgImage={image}
      bgSize="cover"
      height={{ base: "500px" }}
      _hover={{
        ".imageProduct": {
          height: code !== "" && code !== undefined ? "275px" : "280px",
          borderBottomRadius: "0",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        ".side": {
          height: "500px",
        },
        ".text2": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderBottomRadius: "xl",
        },
        textDecoration: "none",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      transition="all .3s ease-out"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      {...rest}
    >
      <Flex
        px={{ base: 2, md: 4 }}
        pt={{ md: 2 }}
        h={{ base: "100%", md: "130%" }}
        background={"rgba(255, 255, 255, 0.23)"}
        boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={"blur(5px)"}
      >
        {code !== "" && code !== undefined ? (
          <Flex
            flexDir="column"
            className="side"
            p={{ base: 6, md: 4 }}
            h="120%"
            transition="all .3s ease-out"
          >
            <ContentBox
              image={image}
              inProgres={inProgres}
              title={title}
              subtitle={subtitle}
              text={text}
              textBottom={textBottom}
              textRight={textRight}
              code={code}
              link={link}
            />
            <ButtonsGrup code={code} link={link} />
          </Flex>
        ) : (
          <Flex
            as={Link}
            href={link}
            target={"_blank"}
            flexDir="column"
            p={{ base: 6, md: 4 }}
          >
            <ContentBox
              image={image}
              inProgres={inProgres}
              title={title}
              subtitle={subtitle}
              text={text}
              textBottom={textBottom}
              textRight={textRight}
              code={code}
              link={link}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
