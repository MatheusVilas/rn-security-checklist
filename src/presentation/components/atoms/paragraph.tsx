import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import useActiveTheme from '../../hooks/use-active-theme'
import { Colors, Typography } from '../../styles'

type ParagraphProps = {
  size?: keyof Typography.FontSizeType
  family?: keyof Typography.FontFamilyType
  color?: keyof Colors.Colors
  style?: StyleProp<TextStyle>
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'MEDIUM',
  family = 'REGULAR',
  color = 'content',
  style,
}) => {
  const theme = useActiveTheme()

  return (
    <Text
      style={[
        {
          fontSize: Typography.fontSizes[size],
          fontFamily: Typography.fontFamily[family],
          color: theme[color],
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}

export default Paragraph
