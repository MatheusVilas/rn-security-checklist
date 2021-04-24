import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useActiveTheme from '../../hooks/use-active-theme'
import Box from './box'

const SafeArea: React.FC = ({ children }) => {
  const theme = useActiveTheme()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Box flex={1}>{children}</Box>
    </SafeAreaView>
  )
}

export default SafeArea
