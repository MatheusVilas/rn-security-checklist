import React from 'react'

import Box from './box'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'

const Divisor: React.FC = () => {
  const theme = useActiveTheme()
  return (
    <Box
      backgroundColor={theme.contentOnColor}
      opacity={0.2}
      flex={1}
      maxHeight={1}
      marginVertical={Spacing.SPACING_LARGE}
    />
  )
}

export default Divisor
