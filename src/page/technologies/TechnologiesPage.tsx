import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Dots } from "../../background/Dots";
import { Wrapper } from "../Wrapper";
import { TechPanel } from "./TechPanel";

type Props = {};

export const TechnologiesPage: FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper
      title={`${t("technologiesPage.title")}`}
      subtitle={`${t("technologiesPage.subtitle")}`}
      id="testymonial"
      isCenter
    >
      <TechPanel />
      <Dots pos="tech" />
    </Wrapper>
  );
};
