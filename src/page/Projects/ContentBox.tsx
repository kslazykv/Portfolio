import { FC } from "react";
import { Flex, useColorModeValue, Text } from "@chakra-ui/react";

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

export const ContentBox: FC<Props> = (props) => {
  const {
    title,
    text,
    textBottom,
    textRight,
    image,
    inProgres = false,
  } = props;

  const color = useColorModeValue("gray.200", "gray.800");
  const colorHoverText = useColorModeValue(
    "rgba(255,255,255,0.5)",
    "rgba(50,50,50,0.5)"
  );
  const colorGradient = useColorModeValue(
    "linear(to-l,  primary.400, secondary.200)",
    "linear(to-l, #7928CA,#FF0080)"
  );

  return (
    <>
      <Flex
        pos="relative"
        h="400px"
        className="imageProduct"
        transition="height .3s ease-out,  border-radius 1.5s ease-out"
        borderTopRadius="xl"
        overflow={"hidden"}
      >
        <Flex bg={color} w="100%" className="borderDisProduct">
          <Flex
            w="100%"
            className="insideBorder"
            bgImage={image}
            bgSize="cover"
          >
            {inProgres && (
              <Text
                p={4}
                w="100%"
                fontSize="3xl"
                color="blue.800"
                fontWeight="extrabold"
                textDecor={"none"}
                fontFamily={"Helvetica"}
              >
                in Progres
              </Text>
            )}
            <Text
              pos="absolute"
              bgGradient={colorGradient}
              bottom={0}
              px={8}
              w="100%"
              fontSize="2xl"
              fontWeight="extrabold"
              fontFamily={"Helvetica"}
              textAlign="right"
              className="textProduct"
              bgClip="text"
            >
              {title}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        mt={4}
        p={4}
        className="text2"
        transition="all .8s ease-out"
        boxShadow={{ base: "rgba(0, 0, 0, 0.35) 0px 5px 15px", md: "none" }}
        borderBottomRadius={{ base: "xl", md: "none" }}
        bg={colorHoverText}
      >
        <Flex w="100%" flexDir="column" justifyContent="space-between">
          <Flex flexDir="column" mb={5}>
            <Text fontSize="sm" dangerouslySetInnerHTML={{ __html: text }} />
          </Flex>
          <Flex justifyContent={"space-between"} fontSize="sm">
            <Text>{textBottom}</Text>
            <Text>{textRight}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
