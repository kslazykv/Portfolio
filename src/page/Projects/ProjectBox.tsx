import { FC } from "react"
import { Flex, useColorModeValue, Text, Button, HStack, Link } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"


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

export const ProjectBox : FC<Props> = (props) => {
    const { title,subtitle, text,textBottom,textRight,image,link,code,inProgres=false, ...rest } = props
    const { t } = useTranslation();
    const color = useColorModeValue('gray.200', 'gray.800')
    const reColor = useColorModeValue( 'primary.400','gray.400')
    const colorShadow = useColorModeValue('#B2B2B2', 'rgb(20,25,35)')
    const colorGradient = useColorModeValue('linear(to-l,  primary.400, secondary.200)','linear(to-l, #7928CA,#FF0080)')

    const colorHover = useColorModeValue('white','black')
    const colorHoverText = useColorModeValue('rgba(246,173,85)','#6c24b5')
 
  
    return(
      <Flex dir="column" px={{base:2,md:4}} py={{md:2}}  flexDir='column' w={{base:'100%',md:'360px'}}{...rest}>
        <Flex   
            flexDir='column'  
            p={{base:6,md:4}} 
            boxShadow={{base:'lg',md:`5px 7px 13px 12px ${colorShadow}`} }
            borderRadius='md'
            as={Link}
            href={link}
            target={'_blank'}
            pointerEvents={code === undefined ? "auto" : "none"}
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
          { code!==''&& code!==undefined&&
            <HStack 
                justify={'center'}
                my={2}
                spacing={5}
            >
                <Button 
                    as={Link}
                    href={code}
                    target='_blank'
                    pointerEvents={"auto"}
                    w='100%' 
                    fontFamily={'Helvetica'}
                    fontSize={'md'}
                    textTransform={'capitalize'}
                    _hover={{
                        textDecoration:'none',
                        bg:color
                    }}
                >
                    {t('projectPage.code')}
                </Button>
                <Button
                  as={Link}
                  href={link}
                  target='_blank'
                  pointerEvents={"auto"}
                  w='100%' 
                  fontFamily={'Helvetica'}
                  fontSize={'md'}
                  textTransform={'capitalize'}
                  _hover={{
                      textDecoration:'none',
                      bg:color
                  }}
                >
                    {t('projectPage.live')}
                </Button>

            </HStack>
            }
            
        </Flex>
           
    </Flex>
    )
  }