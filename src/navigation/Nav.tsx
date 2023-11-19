import { useEffect, useState } from "react";
import {
  Flex,
  HStack,
  Icon,
  useDisclosure,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Menu } from "./Menu";
import { HamburgerIcon } from "@chakra-ui/icons";
import { LanguagePicker } from "./language/LanguagePicker";
import { NavMobile } from "./NavMobile";

export const Nav = () => {
  const bgColor = useColorModeValue(
    "rgba(226,232,240,0.5)",
    "rgba(26,32,44,0.5)"
  );

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Flex
        position="sticky"
        top={visible ? 0 : "-80px"}
        transition="top 0.4s ease-out"
        zIndex={20}
        px={{ base: 0, md: 4 }}
        justifyContent={"space-between"}
        bg={bgColor}
      >
        <Text
          fontFamily={"Helvetica"}
          fontSize={{ base: "3xl" }}
          fontWeight={"bold"}
          cursor={"pointer"}
          onClick={goToTop}
          p={{ base: 3, md: 0 }}
        >
          K.
        </Text>
        <Flex>
          <Menu display={{ base: "none", md: "flex" }} />
          <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>

          <HStack spacing={{ base: 2, md: 0 }} m={{ base: 4, md: 0 }}>
            <Icon
              as={HamburgerIcon}
              onClick={onOpen}
              cursor="pointer"
              fontSize="30px"
              display={{ base: "flex", md: "none" }}
              _hover={{
                opacity: 0.5,
              }}
            />

            <LanguagePicker display={{ base: "none", md: "flex" }} />
            <NavMobile isOpen={isOpen} onClose={onClose} />
            <ColorModeSwitcher />
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
