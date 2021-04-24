import React from 'react'
import { TouchableOpacity } from 'react-native'
import useActiveTheme from '../../hooks/use-active-theme'
import { scaleSize } from '../../styles/mixins'

import Icon from '../atoms/icon'

type ChevronLeftProp = {
  onPress: () => void
}

const ChevronLeft: React.FC<ChevronLeftProp> = ({ onPress }) => {
  const theme = useActiveTheme()

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: scaleSize(48),
        width: scaleSize(48),
        backgroundColor: theme.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        elevation: 1000,
      }}
      onPress={onPress}
    >
      <Icon type="arrow-left-circle" size={24} color="primary" />
    </TouchableOpacity>
  )
}

export default ChevronLeft
