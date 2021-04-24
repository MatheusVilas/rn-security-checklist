import React from 'react'
import { ScrollView } from 'react-native'
import { Spacing } from '../../styles'
import Box from '../atoms/box'

import Paragraph from '../atoms/paragraph'
import CompleteItem from '../molecules/complete-item'

const CompleteList: React.FC = () => (
  <Box flex={1}>
    <Paragraph
      color="contentOnColor"
      style={{
        marginBottom: Spacing.SPACING_LARGE,
        textTransform: 'uppercase',
      }}
    >
      Completos
    </Paragraph>
    <ScrollView bounces>
      <CompleteItem isOdd onPress={() => {}}>
        22 de abril
      </CompleteItem>
      <CompleteItem onPress={() => {}}>22 de abril</CompleteItem>
    </ScrollView>
  </Box>
)

export default CompleteList
