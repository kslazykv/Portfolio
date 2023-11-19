import components from './components'
import foundations from './foundations'

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'


const direction = 'ltr'
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  cssVarPrefix: 'chakra',
}


export const theme = extendTheme({
  styles: {
    global: (props:StyleFunctionProps) => ({
      body: {
          fontFamily: 'Sora',
          color: mode('gray.700', 'gray.100')(props),
          bg: mode('gray.200','gray.800')(props),
          overflowX: 'hidden',
        },
      }),

  },
  direction,
  ...foundations,
  config,
  components,
})
export default theme
