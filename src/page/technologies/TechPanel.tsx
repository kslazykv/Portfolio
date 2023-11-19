import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ShortBox } from "./ShortBox";

type Props = {};

interface TabData {
  title: string;
  arr: Array<{
    title: string;
    image: string;
    link: string;
  }>;
}

export const TechPanel: FC<Props> = (props) => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: any) => {
    setTabIndex(index);
  };

  const tabsData: TabData[] = [
    t("technologiesPage.cards.tab1", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab2", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab3", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab4", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab5", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab6", { returnObjects: true }) as TabData,
    t("technologiesPage.cards.tab7", { returnObjects: true }) as TabData,
  ];

  return (
    <Tabs
      isManual
      variant="enclosed"
      index={tabIndex}
      onChange={handleTabsChange}
      borderBottomRadius={"xl"}
      // w={{base:'100vw !important',md:'100%  !important'}}
      // ml={{base:-9,md:0}}
    >
      <TabList
        sx={{
          borderBottom: "none",
          overflowX: "auto",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent="space-between"
      >
        {tabsData.map((item, index) => (
          <Tab
            key={index}
            background={
              index === tabIndex
                ? "rgba(255, 255, 255, 0.23)"
                : "rgba(0, 0, 0, 0.03)"
            }
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropFilter={"blur(5px)"}
            flex={1}
            justifyContent={"center"}
            borderTopRadius={{ base: "md" }}
            borderColor={{ base: "rgba(0, 0, 0, 0.03)" }}
          >
            {item.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels
        background={"rgba(255, 255, 255, 0.23)"}
        boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={"blur(5px)"}
        borderRightRadius={{ md: "xl" }}
        borderBottomRadius={"xl"}
        overflow={"hidden"}
      >
        {tabsData.map((tab, index) => (
          <TabPanel
            key={index}
            display={"flex"}
            flexWrap={"wrap"}
            gap={{ base: 5, md: 6 }}
            mt={{ md: 6 }}
            justifyContent={{ base: "center", md: "left" }}
          >
            {tab.arr.map((item: any, itemIndex: any) => (
              <ShortBox
                key={itemIndex}
                title={item.title}
                image={`${process.env.PUBLIC_URL}/${item.image}`}
                link={item.link}
              />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
