import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Wrapper } from "../Wrapper";
import { useTranslation } from "react-i18next";
import { ShortBox } from "../technologies/ShortBox";

type Props = {};

export const ContactPage: FC<Props> = (props) => {
  const { t } = useTranslation();

  const section = t("contactPage.cards", { returnObjects: true });
  const cards = Object.values(section);
  const usedBox =
    section &&
    cards.length > 0 &&
    cards.map((item: any, index: any) => {
      const imagePath = item.image
        ? `${process.env.PUBLIC_URL}/${item.image}`
        : "";

      return (
        <ShortBox
          key={index}
          title={item.title}
          image={imagePath}
          link={item.link}
        />
      );
    });

  return (
    <Wrapper
      title={`${t("contactPage.title")}`}
      subtitle={`${t("contactPage.subtitle")}`}
      mb={10}
      id="contact"
    >
      <SimpleGrid
        mt={2}
        mb={10}
        zIndex={2}
        columns={{ base: 2, md: 3, lg: 4 }}
        spacingY={5}
        justifyItems={{ base: "center" }}
        w="100%"
      >
        {usedBox}
      </SimpleGrid>
    </Wrapper>
  );
};
