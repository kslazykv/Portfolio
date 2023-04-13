import { FC } from "react"
import { Flex} from "@chakra-ui/react"
import { ContentBox } from "./ContentBox"
import { WrappreHover } from "./wrappers/WrappreHover"
import { WrappreHoverWithButtons } from "./wrappers/WrappreHoverWithButtons"
import { ButtonsGrup } from "./ButtonsGrup"

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


    return(
      <Flex 
        dir="column" 
        px={{base:2,md:4}} 
        py={{md:2}}  
        flexDir='column' 
        w={{base:'100%',md:'360px'}}
        {...rest}
    >
    
        { code!==''&& code!==undefined ?

            <WrappreHoverWithButtons>
                <ContentBox 
                    image={image} 
                    inProgres={inProgres} 
                    title={title} 
                    subtitle={subtitle} 
                    text={text}
                    textBottom={textBottom} 
                    textRight={textRight} 
                    code={code} link={link}
                />
                <ButtonsGrup code={code} link={link}/>
            </WrappreHoverWithButtons>
        :
            <WrappreHover link={link}>
                <ContentBox 
                    image={image} 
                    inProgres={inProgres} 
                    title={title} 
                    subtitle={subtitle} 
                    text={text}
                    textBottom={textBottom} 
                    textRight={textRight} 
                    code={code} link={link}
                />
            </WrappreHover>
     
        }
           
    </Flex>
    )
  }