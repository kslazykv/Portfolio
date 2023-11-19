import { Text, Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => (
  <Flex
    flexDir={"column"}
    justifyContent={"center"}
    h="100vh"
    alignItems={"center"}
  >
    <Text>loading PAGE...</Text>
    <Spinner
      thickness="4px"
      speed="0.85s"
      emptyColor="gray.700"
      color="blue.500"
      size="xl"
      mt={10}
    />
  </Flex>
);
