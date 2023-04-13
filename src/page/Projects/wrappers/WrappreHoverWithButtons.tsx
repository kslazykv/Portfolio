import { FC } from "react"
import { Flex, useColorModeValue, FlexProps} from "@chakra-ui/react"

type PropsWrappreHoverWithButtons = {}&FlexProps

export const WrappreHoverWithButtons: FC <PropsWrappreHoverWithButtons> = (props) => {
    const { children} = props

    
    const color = useColorModeValue('gray.200', 'gray.800')
    const colorShadow = useColorModeValue('#B2B2B2', 'rgb(20,25,35)')
    const colorGradient = useColorModeValue('linear(to-l,  primary.400, secondary.200)','linear(to-l, #7928CA,#FF0080)')

    const colorHover = useColorModeValue('white','black')
    return(
        <Flex   
            flexDir='column'  
            p={{base:6,md:4}} 
            boxShadow={{base:'lg',md:`5px 7px 13px 12px ${colorShadow}`} }
            borderRadius='md'
            bgColor={color}
            border={`1px solid ${colorShadow}`}
            _hover={{
                '.imageProduct':{
                    transform:{md:'scale(1.01)'},
                    bgGradient: {md:colorGradient},
                },
                '.textProduct':{
                    bgGradient: colorGradient,
                    bgClip:"text",
                    bottom:2,
                },
                '.borderDisProduct':{
                    border:'none',
                    padding:0
                },
                '.insideBorder':{
                    opacity:1
                },
                bg:colorHover,
                textDecoration:'none'
                
            }}
            transition='ease-in 200ms' 
        >
            {children}
        </Flex>
    )
  }