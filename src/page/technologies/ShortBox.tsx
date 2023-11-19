import { FC } from "react";
import { Flex, useColorModeValue, Text, Image } from "@chakra-ui/react";

type Props = {
  title: string;
  image: string;
  link?: string;
};

export const ShortBox: FC<Props> = (props) => {
  const { title, image, link } = props;
  const color = useColorModeValue("gray.800", "gray.100");
  const colorGradient = useColorModeValue(
    "linear(to-l,  primary.400, secondary.200)",
    "linear(to-l, #7928CA,#FF0080)"
  );

  return (
    <Flex
      dir="column"
      flexDir="column"
      borderRadius="md"
      w={{ base: "130px", md: "200px" }}
      maxH="250px"
      as="a"
      href={link}
      target="_blank"
      justifyContent="center"
      alignItems="center"
      userSelect={"none"}
      p={3}
      mb={{ md: 10 }}
      boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        ".text": {
          bgGradient: { md: colorGradient },
          bgClip: { md: "text" },
        },
      }}
      transition="ease-in 200ms"
    >
      <Flex
        px={3}
        py={2}
        justifyContent="center"
        alignItems="center"
        userSelect="none"
        transition="ease-in 200ms"
        w="100%"
      >
        <Text
          className="text"
          color={color}
          bgGradient="none"
          bgClip="none"
          fontSize="2xl"
          fontWeight="black"
          transition="ease-in 200ms"
          textAlign={"center"}
        >
          {title}
        </Text>
      </Flex>
      <Image
        mt={2}
        boxSize="100px"
        objectFit="contain"
        src={image}
        alt={title}
      />
    </Flex>
  );
};
