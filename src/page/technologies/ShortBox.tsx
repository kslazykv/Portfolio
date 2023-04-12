import { FC } from "react"
import { Flex, useColorModeValue, Text, Image } from "@chakra-ui/react"




type Props = {
    title: string
    image: string
    link?: string
}



export const ShortBox : FC<Props> = (props) => {
    const {title, image, link} = props
    const color = useColorModeValue('gray.200', 'gray.800')    
    const reColor = useColorModeValue( 'primary.400','gray.400')
    const colorShadow = useColorModeValue('#B2B2B2', 'rgb(20,25,35)')
    const colorGradient = useColorModeValue('linear(to-l,  primary.400, secondary.200)','linear(to-l, #7928CA,#FF0080)')
    const colorHover = useColorModeValue('white','gray.900')



    return(
        <Flex 
            dir="column"  
            flexDir='column'
            borderRadius='md'
            w={{base:'150px',md:'200px' }}
            maxH='250px' 
            boxShadow={{base:'xl',md:`5px 7px 13px 12px ${colorShadow}`}}
            bgColor={color}
            as='a' 
            href={link}
            target='_blank'
            justifyContent='center' 
            alignItems='center'
            userSelect={'none'}
            p={3}
            mb={{md:10}}
            border={`1px solid ${colorShadow}`}

            _hover={{
                bg:{md:colorHover},
                '.text':{
                    bgGradient:{md:colorGradient},
                    bgClip:{md:"text"}

                },
                '.textWrapper':{
                    bg: {md:color}
                }
            }
        }
            transition='ease-in 200ms'
        >
            <Flex 
                backgroundColor={reColor} 
                px={3}
                py={2}         
                justifyContent='center' 
                alignItems='center'
                borderRadius='md'
                userSelect='none'
                className="textWrapper"
                transition='ease-in 200ms' 
                w='100%'
            >
                <Text 
                    className="text" 
                    color={color}
                    bgGradient="none"
                    bgClip="none"
                    fontSize="2xl"
                    fontWeight="black"
                    transition='ease-in 200ms' 
                    textAlign={'center'}
                >
                    {title}
                </Text>
            </Flex>       
            <Image
                mt={2}
                boxSize='100px'
                objectFit='contain'
                src={image}
                alt={title}
            />
         
        </Flex>
       
    )
}