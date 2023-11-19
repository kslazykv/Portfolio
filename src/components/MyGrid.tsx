import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  VStack,
  Text,
  SimpleGrid,
  SimpleGridProps,
  Button,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProjectBox } from "../page/projects/ProjectBox";
import { ShortBox } from "../page/technologies/ShortBox";

type Props = {
  title?: any;
  section: string;
  box: "ShortBox" | "ProjectBox";
  startingHeight?: any;
  startingHeightMobile?: string;
} & SimpleGridProps;

export const MyGrid: FC<Props> = (props) => {
  const {
    children,
    title,
    box,
    section,
    startingHeight,
    startingHeightMobile = "529px",
    ...rest
  } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onToggle } = useDisclosure();

  const { t } = useTranslation();
  const section1 = t(section, { returnObjects: true });
  const cards = Object.values(section1);

  const columns =
    box === "ShortBox"
      ? { base: 2, md: 3, lg: 4, xl: 5 }
      : { base: 1, md: 2, xl: 3 };

  const usedBox =
    box === "ShortBox"
      ? section &&
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
        })
      : section &&
        cards.length > 0 &&
        cards.map((item: any, index: any) => {
          const imagePath = item.image
            ? `${process.env.PUBLIC_URL}/${item.image}`
            : "";
          return (
            <ProjectBox
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
              textBottom={item.textBottom}
              textRight={item.textRight}
              image={imagePath}
              link={item.link}
              code={item.code}
              inProgres={item.inProgres}
            />
          );
        });

  const ShowMoreButton = () => {
    return (
      <Button
        display={{
          base: box === "ProjectBox" ? "flex" : "none",
          md: cards.length >= 2 && box === "ProjectBox" ? "flex" : "none",
          lg: cards.length > 3 && box === "ProjectBox" ? "flex" : "none",
        }}
        rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        _hover={{
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        w="100%"
        onClick={onToggle}
        background={"rgba(255, 255, 255, 0.23)"}
        backdropFilter={"blur(5px)"}
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      >
        {!isOpen ? "Show More" : "Hide"}
      </Button>
    );
  };

  return (
    <VStack alignItems={"flex-start"} my={2}>
      <Text fontSize={"2xl"}>{title}</Text>
      <Collapse
        startingHeight={
          !isOpen
            ? box === "ShortBox"
              ? "110%"
              : isMobile
              ? startingHeightMobile
              : startingHeight
            : "100%"
        }
        in={isOpen}
        style={{ width: "100%", paddingTop: 10, paddingBottom: 10 }}
        transition={{
          enter: { duration: 0.5 },
          exit: { duration: 0.5, delay: 0 },
        }}
      >
        <SimpleGrid
          zIndex={2}
          columns={columns}
          spacingY={5}
          mx={{ md: 5 }}
          justifyItems={{ base: "center", md: "left" }}
          w="100%"
          {...rest}
        >
          {usedBox}
        </SimpleGrid>
      </Collapse>
      <ShowMoreButton />
    </VStack>
  );
};
