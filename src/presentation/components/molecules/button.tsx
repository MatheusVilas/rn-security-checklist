import React from 'react'
import { TouchableOpacity } from 'react-native'

import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'
import { scaleSize } from '../../styles/mixins'

import Paragraph from '../atoms/paragraph'

type ButtonProps = {
  onPress: () => void
  bgColor: 'primary' | 'content'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  bgColor,
  disabled,
}) => {
  const theme = useActiveTheme()

  return (
    <TouchableOpacity
      style={{
        paddingVertical: Spacing.SPACING_XXSMALL,
        height: scaleSize(40),
        borderRadius: scaleSize(2),
        backgroundColor: theme[bgColor],
        opacity: disabled ? 0.4 : 1,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Paragraph
        size="LARGE"
        family="BOLD"
        color={bgColor === 'content' ? 'primary' : 'content'}
        style={{ textTransform: 'uppercase', textAlign: 'center' }}
      >
        {children}
      </Paragraph>
    </TouchableOpacity>
  )
}

export default Button
