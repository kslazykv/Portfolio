import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Dots } from "../../background/Dots"
import { MyGrid } from "../../components/MyGrid"
import { Wrapper } from "../Wrapper"


type Props = {}


export const TechnologiesPage : FC<Props> = (props) => {
    const { t } = useTranslation();

    return(
        <Wrapper title={`${t('technologiesPage.title')}`} subtitle={`${t('technologiesPage.subtitle')}`} id='testymonial' isCenter>
            <MyGrid section={'technologiesPage.cards.base'} title={`${t('technologiesPage.base')}`} box='ShortBox'/>
            <MyGrid section={'technologiesPage.cards.medium'} title={`${t('technologiesPage.medium')}`} box='ShortBox'/>
            <MyGrid section={'technologiesPage.cards.toDo'} title={`${t('technologiesPage.toDo')}`} box='ShortBox'/>
            <Dots pos='tech'/>
        </Wrapper>
      
    )
  }

  