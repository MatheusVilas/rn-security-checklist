import React from 'react'
import { TouchableOpacity } from 'react-native'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'
import { scaleSize } from '../../styles/mixins'
import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'

type CheckItemProps = {
  onPress: () => void

  isActive?: boolean
}

const CheckItem: React.FC<CheckItemProps> = ({
  children,
  onPress,
  isActive,
}) => {
  const theme = useActiveTheme()

  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.contentOnColorOpacity,
      }}
      onPress={onPress}
    >
      <Box
        paddingHorizontal={Spacing.SPACING_XXSMALL}
        paddingVertical={Spacing.SPACING_MEDIUM}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Paragraph size="LARGE" color="contentOnColor">
          {children}
        </Paragraph>

        <Box
          width={scaleSize(18)}
          height={scaleSize(18)}
          borderRadius={2}
          borderWidth={1}
          borderColor="#f9f9f9"
          backgroundColor={isActive ? theme.primary : 'white'}
        />
      </Box>
    </TouchableOpacity>
  )
}

export default CheckItem
