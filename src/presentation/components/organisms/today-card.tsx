import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'

import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'
import Button from '../molecules/button'

type TodayCardProps = {
  goToChecklist: () => void
}

const TodayCard: React.FC<TodayCardProps> = ({ goToChecklist }) => {
  const theme = useActiveTheme()

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
        HOJE É
      </Paragraph>
      <Paragraph
        style={{ marginBottom: Spacing.SPACING_LARGE }}
        family="BOLD"
        size="EXTRA_LARGE"
      >
        24 DE ABRIL
      </Paragraph>
      <Button bgColor="content" onPress={goToChecklist}>
        Preencher checklist
      </Button>
    </Box>
  )
}

export default TodayCard
