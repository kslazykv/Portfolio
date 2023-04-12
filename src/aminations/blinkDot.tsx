import {  keyframes } from "@chakra-ui/react"


export const flicker = (  color1: string, color2:string ) => keyframes`
0%, 
19.999%, 
22%, 
62.999%, 
64%, 
64.999%, 
70%, 
100% {
	opacity: .99;
    background-color:${color1}
}
20%, 
21.999%, 
63%, 
63.999%, 
65%, 
69.999% {
    opacity: 0.4;
    text-shadow: none;
    background-color: ${color2}
}
`