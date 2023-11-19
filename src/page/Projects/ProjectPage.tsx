import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Dots } from "../../background/Dots";
import { MyGrid } from "../../components/MyGrid";
import { Wrapper } from "../Wrapper";

type Props = {};

export const ProjectPage: FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper
      id="products"
      title={`${t("projectPage.title")}`}
      subtitle={`${t("projectPage.subtitle")}`}
    >
      <MyGrid
        section="projectPage.cards.website"
        title={t("projectPage.website")}
        box="ProjectBox"
        startingHeight={"520px"}
      />
      <MyGrid
        section="projectPage.cards.components"
        title={t("projectPage.components")}
        box="ProjectBox"
        startingHeight="520px"
      />
      <Dots pos="pro" />
    </Wrapper>
  );
};
