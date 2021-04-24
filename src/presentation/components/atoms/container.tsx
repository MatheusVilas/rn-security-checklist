import React from 'react'

import Box from './box'
import { Spacing } from '../../styles'

const Container: React.FC = ({ children }) => (
  <Box flex={1} paddingHorizontal={Spacing.SPACING_MEDIUM}>
    {children}
  </Box>
)

export default Container
