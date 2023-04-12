import { Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import Parallax from "../../aminations/Parallax"
import { BlinkText } from "../../background/BlinkText"


type Props = {}



export const MainPage : FC<Props> = (props) => {
    const color = useColorModeValue('gray.200', 'gray.800')
    const strap1 = useColorModeValue( '#F6AD55','#319795')
    const strap2 = useColorModeValue( '#FEFCBF','#90CDF4')
    const colorGradient = useColorModeValue('linear(to-l,  primary.400, secondary.200)','linear(to-l, #7928CA,#FF0080)')
    const { t } = useTranslation();
 
    const textSplite = t('home').split(",")


    return(
        <>
            <Flex 
                minH={{base: `calc(100vh - 20vh)`,md:'90vh'}}
                flexDir={{base:'column'}} 
                justifyContent='center' 
                alignItems={{base:'center', md:'self-start'}}
                pos='relative'
                fontSize={{base:'6xl',md:'9xl'}} 
                fontWeight='bold'
            >
                <VStack 
                    spacing={5}
                    zIndex={20}  
                    mt={{base:'-44%',md:-28}}
                    userSelect={'none'}
                >
                    {textSplite.map((word,index)=>(
                         <Parallax offset={-20*index+1} key={index} >
                            <Text
                                fontFamily={'Helvetica'}
                                textAlign={{base:'center',md:'left'}}
                                pl={{md:8}}
                                lineHeight='normal'
                                mt={-5}
                            >
                              {word}
                            </Text>
                     
                        </Parallax>
                    ))}
                </VStack>  
            
                <Flex
                    p={6} 
                    position='absolute' 
                    w={{base:'60px',md:'100px'}} 
                    h={{base:'50vh',md:'350px' }}
                    left={{base:-4,md:'-1%'}}
                    top={{base:'20%', md:'20%' }}
                    bgGradient={`repeating-linear-gradient( 45deg,
                    ${strap1} 5px,
                        ${strap2} 10px,
                        transparent 10px,
                        transparent 20px)`}
                />
                <Flex
                    bgGradient={colorGradient}
                    p={6} 
                    position='absolute' 
                    w='300px'
                    h='300px' 
                    top={{base:'10%', md:'30%' }}
                    opacity={0.7}
                >
                    <Flex bgColor={color} w='100%'/>
                </Flex>

                <Flex
                    p={6} 
                    position='absolute' 
                    w={{base:'60%',md:'550px'}} 
                    h='150px' 
                    left={{base:'10vw',md:'18%'}}
                    top={{base:'20%', md:'43%' }}
                    bgGradient={`repeating-linear-gradient( 45deg,
                    ${strap1} 5px,
                        ${strap2} 10px,
                        transparent 10px,
                        transparent 20px)`}
                />
             <BlinkText/>
        </Flex>
       
       
      </>
    )
  }