import { FC } from "react"
import { Box, Circle,useColorModeValue, usePrefersReducedMotion } from "@chakra-ui/react"
import { flicker } from "../aminations/blinkDot"




type Props = {
    pos: 'tech' |'pro'
}



export const Dots : FC <Props> = ( {pos}:Props ) => {
    const color = useColorModeValue('secondary.200','#FF0080')
    const colorBlink = useColorModeValue( '#ffa338','#FF8D07')
    const bgColor = useColorModeValue('gray.200','gray.800')
  
    const prefersReducedMotion = usePrefersReducedMotion()
    const animation = prefersReducedMotion
    ? undefined
    : `${flicker(bgColor ,colorBlink)} 5s linear infinite`

   


    const techno = [
        {
            boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'-5vw',
            top:'-2vh',
            size:'3vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75) inset',
            bg:bgColor,
            left:'76vw',
            top:'40vh',
            size:'2vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 20px 2px rgba(0,0,0,0.75)',
            bg:color,
            left:'45vw',
            top:'30vh',
            size:'10vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'65vw' ,
            top:'60vh' ,
            size:'2vw',
            animation: 'none',
            zIndex:-1,

        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'-20vw' ,
            size:'10vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75) inset',
            bg:bgColor,
            left:'-10vw' ,
            top:'90%' ,
            size:'2vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75) inset',
            bg:bgColor,
            left:'-15vw' ,
            top:'92%' ,
            size:'4vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'70%',
            top:'75%',
            size:'5vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.75)',
            bg:color,
            left:'90%',
            top:'85%',
            size:'8vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'90%',
            top:'94%',
            size:'4vw',
            animation: 'none',
            zIndex:-2,
        },
        
    ]

    const produ = [
        {
            boxShadow:'0px 0px 30px 10px rgba(0,0,0,0.75)',
            bg:color,
            left:'-25vw',
            top:'10vh',
            size:'20vw',
            animation: 'none',
            zIndex:-1,
        },{
            boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'-15vw',
            top:'2',
            size:'5vw',
            zIndex:-2,
            animation: 'none',

        },{
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75) inset',
            bg:bgColor,
            left:'-5vw',
            top:'-4',
            size:'2vw',
            animation: 'none',
            zIndex:-1,
        },{
            boxShadow:'0px 0px 20px 2px rgba(0,0,0,0.75)',
            bg:bgColor,
            left:'75vw',
            top:'50vh',
            size:'5vw',
            animation: 'none',
            zIndex:-1,
        },
        {
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75) inset',
            left:'65vw',
            top:'62vh',
            size:'2vw',
            animation: animation,
            zIndex:-1,
        }
    ]

    const displayArray = pos==='tech'? techno : produ

 

    return(
        <Box  zIndex={-2} display={{base:'none',md:'block'}}>   
        
           { displayArray.map((item,index)=>( 
                <Circle 
                    key={index} 
                    position={'absolute'} 
                    boxShadow={item.boxShadow} 
                    bg={item.bg} 
                    left={item.left} 
                    top={item.top} 
                    size={item.size}
                    animation={item.animation}
                    zIndex={item.zIndex}
                    opacity={0.3}

                />                
               
            ))}
      
        </Box>
    
    )
  }

  