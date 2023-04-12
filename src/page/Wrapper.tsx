import { FC } from "react"
import { Flex, FlexProps,Text, useColorModeValue } from "@chakra-ui/react"

type Props = {
title?: string
subtitle?: string
isCenter?: boolean
}& FlexProps

export const Wrapper : FC<Props> = (props) => {
    const { children, title,subtitle,isCenter, ...rest } = props
    const strap1 = useColorModeValue( 'rgba(246,173,85,.5)','rgba(49,151,149,.3)')
    const strap2 = useColorModeValue( 'rgba(254,252,191,.5)','rgba(144,205,244,.3)')
    
    
    return(
        <Flex flexDir='column' pos='relative' mb={20} {...rest}> 
           
            <Text 
                zIndex={2} 
                my={10} 
                px={6}
                pt={4}
                pb={6}
                fontSize='3xl' 
                fontWeight='bold'
                fontFamily={'Helvetica'}
                alignSelf={{base:'center',md:'auto'}}
                w='fit-content'
               
                bgGradient={`repeating-linear-gradient( 45deg,
                     ${strap1} 2px,
                     ${strap2} 5px,
                     transparent 2px,
                     transparent 10px)`}
                clipPath='polygon(0% 0%, 100% 0%, 100% 75%, 46% 76%, 24% 100%, 25% 76%, 0% 75%)'
                
            >
                {title} 
            </Text>
           {subtitle&& 
                <Text 
                    fontSize={'lg'}     
                    mb={{base:5,md:10}} 
                    mx={5} 
                    textAlign='justify'
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                />
            }

            
                <Flex mx={5} flexDir='column' zIndex={2}>
                    {children}
                </Flex> 
            
       
        </Flex>
    )
}