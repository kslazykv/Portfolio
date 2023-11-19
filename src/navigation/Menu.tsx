import { Stack, StackProps, Text } from "@chakra-ui/react";
import { FC, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {} & StackProps;

export const Menu: FC<Props> = (props) => {
  const { t } = useTranslation();

  const menuList = [
    { text: t("menu.about"), goTo: "about", active: false },
    { text: t("menu.products"), goTo: "products", active: false },
    { text: t("menu.testymonial"), goTo: "testymonial", active: false },
    { text: t("menu.contact"), goTo: "contact", active: false },
  ];

  const clamp = (value: number) => Math.max(0, value);
  const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil;

  const handleClick = (ref: any) => {
    const section = document.querySelector(ref);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ids = menuList.map((item) => item.goTo);

  const useScrollspy = (ids: string[], offset: number = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.pageYOffset;

        const position = ids
          .map((id) => {
            const element = document.getElementById(id);

            if (!element) return { id, top: -1, bottom: -1 };

            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);

            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));

        setActiveId(position?.id || "");
      };

      listener();

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }, [ids, offset]);

    return activeId;
  };

  const activeId = useScrollspy(ids, 54);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      zIndex={10}
      p={2}
      mx={5}
      gap={5}
      {...props}
    >
      {menuList.map((item, index) => (
        <Text
          key={`${index}-key`}
          onClick={() => handleClick(`#${item.goTo}`)}
          cursor="pointer"
          fontFamily={"Helvetica"}
          fontWeight={"bold"}
          alignSelf={"center"}
          opacity={item.active || item.goTo === activeId ? 1 : 0.6}
          _hover={{
            opacity: 1,
          }}
        >
          {item.text}
        </Text>
      ))}
    </Stack>
  );
};
