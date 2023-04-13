import { FC } from "react"
import { Flex, useColorModeValue, Text} from "@chakra-ui/react"

type Props = {
    title?: string
    subtitle?: string
    text: string
    textBottom?: string
    textRight?: string
    image?: string
    link?: string
    code?: string
    inProgres?: boolean
}

export const ContentBox : FC<Props>= (props)=>{
    const { title,subtitle, text, textBottom,textRight,image,inProgres=false } = props

    const color = useColorModeValue('gray.200', 'gray.800')
    const reColor = useColorModeValue( 'primary.400','gray.400')
    const colorHoverText = useColorModeValue('rgba(246,173,85)','#6c24b5')

    return(
    <>
       <Flex 
            pos='relative'  
            borderRadius='md'
            h='250px'
            className="imageProduct"
            transition='transform 200ms' 
        >
            <Flex 
                bg={color}
                m={{md:2}}  
                p={2}
                w='100%'
                borderRadius='md'
                bgColor={reColor}

                className='borderDisProduct'
                transition='ease-in 200ms' 
            >
                <Flex 
                    w='100%'
                    borderRadius='md'
                    className='insideBorder'
                    transition='ease-in 200ms' 
                    bgImage={image}
                    bgSize='cover'
                    opacity={0.8}
                >
                    {inProgres&&
                        <Text 
                            w='100%'
                            fontSize='3xl' 
                            color='blue.800'
                            fontWeight='extrabold'
                            fontFamily={'Helvetica'}
                        >
                            in Progres
                        </Text>
                    }
                    <Text 
                        pos='absolute' 
                        color={colorHoverText}
                        bottom={0} 
                        px={8} 
                        w='100%'
                        fontSize='3xl' 
                        fontWeight='extrabold'
                        fontFamily={'Helvetica'}
                        transition='ease-in 200ms' 
                        textAlign='right'
                        className="textProduct"
                    >
                        {title}  
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        
        <Flex mt={8}>
            <Flex w='100%' flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column' mb={5}>
                    <Text fontWeight='bold' fontSize='xl' mb={2}>{subtitle}</Text>
                    <Text dangerouslySetInnerHTML={{ __html: text}}/>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Text>{textBottom}</Text>
                    <Text  fontSize='sm'>{textRight}</Text>
                    
                </Flex>
            </Flex>
        </Flex>
       
    </>
)
  } 