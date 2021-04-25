import React from 'react'
import { ActivityIndicator } from 'react-native'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'
import Box from '../atoms/box'

const Loading = () => {
  const theme = useActiveTheme()
  return (
    <Box flex={1} paddingTop={Spacing.SPACING_LARGE}>
      <ActivityIndicator size="large" color={theme.contentOnColor} />
    </Box>
  )
}

export default Loading
