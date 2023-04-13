import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Dots } from "../../background/Dots"
import { MyGrid } from "../../components/MyGrid"
import { Wrapper } from "../Wrapper"

type Props ={}



export const ProjectPage : FC<Props> = (props) => {
    const { t } = useTranslation();
 

    return(
        <Wrapper title={`${t('projectPage.title')}`} id='products' subtitle={`${t('projectPage.subtitle')}`}>
         
            <MyGrid section='projectPage.cards.website' title={t('projectPage.website')} box='ProjectBox' startingHeight='490px' />
            <MyGrid section='projectPage.cards.components' title={t('projectPage.components')} box='ProjectBox'startingHeight='540px' startingHeightMobile="480px"/>
            
            <Dots pos='pro'/>
         
        </Wrapper>

    )
}