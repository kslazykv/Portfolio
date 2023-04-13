import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { VStack, Text, SimpleGrid, SimpleGridProps, Button, Collapse, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectBox } from "../page/projects/ProjectBox";
import { ShortBox } from "../page/technologies/ShortBox";

type Props = {
    title?: any
    section: string
    box: 'ShortBox'| 'ProjectBox'
    startingHeight?: any
    startingHeightMobile?: string
}& SimpleGridProps



export const MyGrid:FC<Props> = (props) =>{
    const { children, title,box,section,startingHeight,startingHeightMobile='500px', ...rest } = props
    const isMobile = useBreakpointValue({base:true, md:false})
    const buttonColor = useColorModeValue( 'rgba(246,173,85,.5)','rgba(49,151,149,.3)')
    const buttonHover = useColorModeValue( 'rgba(254,252,191,.5)','rgba(144,205,244,.3)')
    const [show, setShow] = useState(false)

   

    
    const { t } = useTranslation();
    const section1 = t(section, { returnObjects: true })
    const cards =  Object.values(section1)

    const columns = box==='ShortBox'? {base:2, md:3,lg:4, xl:5} : {base:1, md:2, xl:3}

    const usedBox = (
        box==='ShortBox'? 
            section &&
            cards.length > 0 &&     
            cards.map((item:any,index:any)=>(
                <ShortBox 
                    key={index} 
                    title={item.title} 
                    image={item.image}
                    link={item.link}
                />
           ))
        :  section &&
            cards.length > 0 &&     
            cards.map((item:any,index:any)=>(   
                <ProjectBox
                    key={index}
                    title={item.title} 
                    subtitle={item.subtitle} 
                    text={item.text}
                    textBottom={item.textBottom}
                    textRight={item.textRight}
                    image={item.image}
                    link={item.link}
                    code={item.code}
                    inProgres={item.inProgres}
                />
            ))
    ) 

    const  ShowMoreButton=()=> {
        return (
            <Button  
                display={{base:box==='ProjectBox'?'flex':'none',md:cards.length>=2&&box==='ProjectBox'?'flex':'none',lg:cards.length>3&&box==='ProjectBox'?'flex':'none'}}
                rightIcon={!show?<ChevronDownIcon />:<ChevronUpIcon/>} 
                bgColor={buttonColor}
                _hover={{
                    bgColor:buttonHover
                }}
                w='100%'
                onClick={() => setShow(!show)}
            >
               {!show? 'Show More' : 'Hide'}
            </Button>
        );
      }

    
    return(
        <VStack alignItems={'flex-start'} my={2} >
            <Text>{title}</Text>
            <Collapse            
                startingHeight={!show? box==='ShortBox'?'110%':isMobile? startingHeightMobile : startingHeight :'100%'} 
                in={show}
                style={{width:'100%', paddingTop:10, paddingBottom:10}}
                
            >
                <SimpleGrid 
                        zIndex={2}
                        columns={columns}  
                        spacingY={5} 
                        mx={{md:5}} 
                        justifyItems={{base:'center',md:'left'}}
                        w='100%'
                        {...rest}
                    >
                    
                        {usedBox}
                    
                </SimpleGrid>
            </Collapse>
            <ShowMoreButton/>
        </VStack>
    )
}