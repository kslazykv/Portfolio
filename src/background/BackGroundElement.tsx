import { FC, useEffect } from "react"
import { chakra, useColorModeValue } from "@chakra-ui/react"


type Props = {}



export const BackgroundElement : FC<Props> = (props) => {
    const bgColor = useColorModeValue('gray.200','gray.800')
    const textSlogan = useColorModeValue('gray.400','gray.600')

    useEffect(() => {
        let text = ''
        for(var i=0; i<50; i++)
        {
            text += ` let's do something awesome! `
        }
        const div  = document.getElementById('slogan')!

       div.innerHTML = text
      },[]);


    return(
    <>
        <chakra.div
            id="slogan" 
            position= 'absolute'
            height='100vh'

            overflow='hidden'
            opacity={.3}
            fontFamily={'Helvetica'}
            fontWeight='extrabold'
            fontSize={{base:'xl',md:'6xl'}}
            letterSpacing= '-.2px'

            textAlign= 'justify'
            bgGradient={`linear(to bottom ,${textSlogan}, ${bgColor} )`}
            bgClip='text'

            userSelect={'none'}
        />

    </>
)}