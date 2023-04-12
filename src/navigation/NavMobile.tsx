import { 
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerFooter, 
    DrawerOverlay, 
    HStack, 
    VStack 
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { LanguagePicker } from "./language/LanguagePicker"
import { Menu } from "./Menu"

export const NavMobile =({isOpen,onClose}:any)=>{
    const { t } = useTranslation()
  
      return(
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
  
            <DrawerBody   
              display={'flex'}    
              alignItems={'center'}
            >
              <VStack spacing={5}>
                <Menu />    
              </VStack>
            
            </DrawerBody>
  
          <DrawerFooter>
            <HStack spacing={5}>
              <LanguagePicker/>
  
              <Button variant='outline' mr={3} onClick={onClose}>
              {t('menu.cancel')}
              </Button>
            </HStack>
            
  
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  
      )
    }
    