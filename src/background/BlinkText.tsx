import { useColorModeValue, usePrefersReducedMotion,Text } from "@chakra-ui/react"
import { FC } from "react"
import { flicker } from "../aminations/blinkText"

type Props = {}

export const BlinkText : FC<Props> = (props) => {
    const textColor = useColorModeValue( '#7928CA','#FF0080')
    const textBlink = useColorModeValue( '#ffa338','#FF8D07')
    const prefersReducedMotion = usePrefersReducedMotion()
    const animation = prefersReducedMotion
    ? undefined
    : `${flicker} 3s linear infinite`
    
    
    
    return(
    <Text as='h1'
        data-heading="n" 
        color= {textColor}
        fontFamily= 'CoreCircus, sans-serif'
        fontWeight= {'bold'}
        fontSize= '14vw'
        textAlign= 'center'
        lineHeight= {1}
        margin= {0}
        left= {{base:'30%',md:'60%'}}
        bottom={'10%'}
        position= 'absolute'
        letterSpacing= {{md:'-.5rem'}}
        userSelect={'none'}
        maxW={{base:'50%',md:'100%'}}

        _before={{
            content: `attr(data-heading)`,
            position: 'absolute',
            overflow: 'hidden',
            color:textBlink,
        
            width:'fit-content',
            zIndex: 5,
            textShadow: 'none',
            left:{base:'58%',md:'63%'},
            textAlign: 'left',
            animation: animation
        }}
    >
        Front end
    </Text>
)}