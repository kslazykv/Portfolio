import { FC, useState } from "react";
import { Button, Flex, FlexProps, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next"



type Props = {}&FlexProps

const langs = [
    { shortCode: 'en', label: 'English' },
    { shortCode: 'no', label: 'Norsk' },
    { shortCode: 'it', label: 'Italiano' },
    { shortCode: 'pl', label: 'Polski' },
]

export const LanguagePicker : FC<Props> = ({ ...rest}) => {
    const { i18n } = useTranslation()
    const color1 = useColorModeValue( 'gray.800','white')
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)


const handleSelected = (evt:any)=>{
    setCurrentLanguage(evt);
    i18n.changeLanguage(evt)
}


return(
    <Flex {...rest}>
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg={{md:'transparent'}}   
            >
                {currentLanguage}
            </MenuButton>

            <MenuList color={color1}>
                {langs.map(({ shortCode, label}: any) => (
                    <MenuItem
                        key={label}
                        opacity={currentLanguage  ? 1 : 0.6}
                        _hover={{ opacity: 1 }}
                        onClick={()=>handleSelected(shortCode)}
                    >  
                    {label}

                    </MenuItem> 
                ))}

            </MenuList>
        </Menu>
    </Flex>
)
}

