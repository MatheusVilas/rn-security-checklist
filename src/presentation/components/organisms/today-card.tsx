import moment from 'moment'
import React from 'react'
import { CheckList } from '../../../main/store/days-list-reducer'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'

import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'
import Button from '../molecules/button'

type TodayCardProps = {
  goToChecklist: () => void
  list: CheckList[]
}

const TodayCard: React.FC<TodayCardProps> = ({ goToChecklist, list }) => {
  const theme = useActiveTheme()
  const today = moment()
  const hasEntryToday = list.find(item =>
    moment(item.savedAt).isSame(today, 'day'),
  )

  return (
    <Box
      padding={Spacing.SPACING_SMALL}
      backgroundColor={theme.primary}
      justifyContent="center"
      marginTop={Spacing.SPACING_XLARGE}
    >
      <Paragraph
        style={{ marginBottom: Spacing.SPACING_XSMALL }}
        color="content"
      >
        TODAY IS
      </Paragraph>
      <Paragraph
        style={{ marginBottom: Spacing.SPACING_LARGE }}
        family="BOLD"
        size="EXTRA_LARGE"
      >
        {today.format('DD/MM/YYYY')}
      </Paragraph>
      {hasEntryToday ? (
        <Button disabled bgColor="content" onPress={goToChecklist}>
          ALREADY ADDED
        </Button>
      ) : (
        <Button bgColor="content" onPress={goToChecklist}>
          ADD CHECKLIST
        </Button>
      )}
    </Box>
  )
}

export default TodayCard
