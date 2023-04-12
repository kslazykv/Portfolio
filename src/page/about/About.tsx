import { FC } from "react"
import { Circle, Flex, Text, Image } from "@chakra-ui/react"
import { Wrapper } from "../Wrapper"
import { useTranslation } from "react-i18next"


type Props = {}


export const About : FC<Props> = (props) => {
    const { t } = useTranslation();

    return(
        <Wrapper title={`${t('about.title')}`} mb={10} id='about'>
            <Flex flexDir={{base:'column',md:'row'}} alignItems='center' >
                <Text 
                    fontSize={'lg'} 
                    dangerouslySetInnerHTML={{ __html: t('about.text') }}
                    mr={{base:0, md:10}}
                    mb={{base:10, md:0}}
                    textAlign='justify'
                />
                <Image 
                    src={'me_bergen.jpg'}
                    w={{base:'100%', md:'40%'}}
                />
            </Flex>
  
        </Wrapper>
      
    )
  }