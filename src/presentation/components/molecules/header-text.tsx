import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'

import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'

const HeaderText: React.FC = ({ children }) => {
  const theme = useActiveTheme()

  return (
    <Box
      paddingVertical={Spacing.SPACING_SMALL}
      backgroundColor={theme.primary}
      flex={1}
      justifyContent="center"
      paddingHorizontal={Spacing.SPACING_MEDIUM}
    >
      <Paragraph
        size="LARGE"
        family="BOLD"
        color="contentOnColor"
        style={{ textTransform: 'uppercase', textAlign: 'left' }}
      >
        {children}
      </Paragraph>
    </Box>
  )
}

export default HeaderText
