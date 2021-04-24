import React from 'react'
import { scaleSize } from '../../styles/mixins'
import Box from '../atoms/box'

const HeaderWrapper: React.FC = ({ children }) => (
  <Box height={scaleSize(48)}>{children}</Box>
)

export default HeaderWrapper
