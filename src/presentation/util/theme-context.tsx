import React, { createContext } from 'react'
import { useColorScheme } from 'react-native'

import colorsTheme from '../styles/colors'

export const ThemeContext = createContext(colorsTheme.light)

const ThemeWrapper: React.FC = ({ children }) => {
  const colorScheme = useColorScheme()

  return (
    <ThemeContext.Provider
      value={colorScheme === 'dark' ? colorsTheme.dark : colorsTheme.light}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper
