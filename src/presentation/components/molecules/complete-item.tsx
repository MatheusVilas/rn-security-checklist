import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Spacing } from '../../styles'
import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'

type CompleteItemProp = {
  isOdd?: boolean
}

const CompleteItem: React.FC<CompleteItemProp> = ({ children, isOdd }) => (
  <TouchableWithoutFeedback>
    <Box
      paddingHorizontal={Spacing.SPACING_XXSMALL}
      paddingVertical={Spacing.SPACING_SMALL}
      backgroundColor={isOdd ? 'rgba(255, 165, 0, 0.2)' : 'transparent'}
    >
      <Paragraph
        color="contentOnColor"
        family="BOLD"
        style={{ textTransform: 'uppercase' }}
      >
        {children}
      </Paragraph>
    </Box>
  </TouchableWithoutFeedback>
)

export default CompleteItem
