import moment from 'moment'
import React from 'react'
import { ScrollView } from 'react-native'
import { CheckList } from '../../../main/store/days-list-reducer'
import { Spacing } from '../../styles'
import isOdd from '../../util/is-odd'
import Box from '../atoms/box'

import Paragraph from '../atoms/paragraph'
import CompleteItem from '../molecules/complete-item'

type CompleteListProps = {
  list: CheckList[]
}

const CompleteList: React.FC<CompleteListProps> = ({ list }) => (
  <Box flex={1}>
    {list.length > 0 && (
      <Box>
        <Paragraph
          color="contentOnColor"
          style={{
            marginBottom: Spacing.SPACING_LARGE,
            textTransform: 'uppercase',
          }}
        >
          Completed
        </Paragraph>
        <ScrollView bounces={false}>
          {list.map((item, index) => (
            <CompleteItem key={item.id} isOdd={isOdd(index)}>
              {moment(item.day).format('DD/MM/YYYY')}
            </CompleteItem>
          ))}
        </ScrollView>
      </Box>
    )}
  </Box>
)

export default CompleteList
