import { FC } from "react";
import {
  useColorModeValue,
  FlexProps,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type PropsButtonsGrup = {
  link?: string;
  code?: string;
} & FlexProps;

export const ButtonsGrup: FC<PropsButtonsGrup> = (props) => {
  const { code, link } = props;

  const { t } = useTranslation();
  const color = useColorModeValue("gray.200", "gray.800");

  return (
    <HStack justify={"center"} my={2} spacing={5}>
      <Button
        as={Link}
        href={code}
        target="_blank"
        pointerEvents={"auto"}
        w="100%"
        fontFamily={"Helvetica"}
        fontSize={"md"}
        textTransform={"capitalize"}
        _hover={{
          textDecoration: "none",
          bg: color,
        }}
      >
        {t("projectPage.code")}
      </Button>
      <Button
        as={Link}
        href={link}
        target="_blank"
        pointerEvents={"auto"}
        w="100%"
        fontFamily={"Helvetica"}
        fontSize={"md"}
        textTransform={"capitalize"}
        _hover={{
          textDecoration: "none",
          bg: color,
        }}
      >
        {t("projectPage.live")}
      </Button>
    </HStack>
  );
};
