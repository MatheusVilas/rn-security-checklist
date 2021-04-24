import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface BoxProps extends ViewStyle {
  style?: StyleProp<ViewStyle>
}

const Box: React.FC<BoxProps> = props => {
  const { children, style, ...rest } = props

  return <View style={[{ ...rest }, style]}>{children}</View>
}

export default Box
