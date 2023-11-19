import { FC } from "react";
import { Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  title?: string;
  subtitle?: string;
  isCenter?: boolean;
} & FlexProps;

export const Wrapper: FC<Props> = (props) => {
  const { children, title, subtitle, isCenter, ...rest } = props;

  const colorGradient = useColorModeValue(
    "linear(to-l,  primary.400, secondary.200)",
    "linear(to-l, #7928CA,#FF0080)"
  );

  return (
    <Flex flexDir="column" pos="relative" mb={20} {...rest}>
      <Text
        zIndex={2}
        my={10}
        p={4}
        fontSize="3xl"
        fontWeight="bold"
        fontFamily={"Helvetica"}
        alignSelf={{ base: "center", md: "auto" }}
        w="fit-content"
        background={"rgba(255, 255, 255, 0.23)"}
        borderRadius={"md"}
        boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={"blur(5px)"}
        bgGradient={colorGradient}
        bgClip="text"
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          fontSize={{ base: "md", md: "xl" }}
          mb={{ base: 5, md: 10 }}
          mx={5}
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      <Flex mx={5} flexDir="column" zIndex={2}>
        {children}
      </Flex>
    </Flex>
  );
};
