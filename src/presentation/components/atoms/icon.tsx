import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Colors, Mixins } from '../../styles'
import useActiveTheme from '../../hooks/use-active-theme'

type IconProps = {
  type: 'user' | 'arrow-left-circle'

  size: number
  color: Colors.AllColors
}

const Icon: React.FC<IconProps> = ({ type, size, color }) => {
  const theme = useActiveTheme()
  const actualSize = Mixins.scaleSize(size)

  return <Feather name={type} size={actualSize} color={theme[color]} />
}

export default Icon
