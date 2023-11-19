import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Layout } from "./navigation/Layout";
import { MainPage } from "./page/main/MainPage";
import { ProjectPage } from "./page/projects/ProjectPage";
import { TechnologiesPage } from "./page/technologies/TechnologiesPage";
import { ContactPage } from "./page/contact/ContactPage";
import { About } from "./page/about/About";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <MainPage />
        <About />
        <ProjectPage />
        <TechnologiesPage />
        <ContactPage />
      </Layout>
    </ChakraProvider>
  );
};
