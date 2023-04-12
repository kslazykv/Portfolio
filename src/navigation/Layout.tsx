import { Container } from "@chakra-ui/react"
import { ReactNode, Suspense } from "react"
import { Nav } from "./Nav"
import { Loader } from "../page/loader/Loader"
import { Footer } from "./Footer"


export const Layout= ({ children }: { children: ReactNode }) => {

    return(
      <Suspense fallback={<Loader />}>
        <Nav/>
        <Container 
          display='flex' flexDir='column'   
          maxW='container.xl' pos='relative' zIndex={1}  mt={10} 
        >
          {children}
        </Container>
        <Footer/>
      </Suspense>
    )
  }
  
