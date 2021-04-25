import React from 'react'
import moment from 'moment'
import { useNavigation } from '@react-navigation/core'
import useActiveTheme from '../../hooks/use-active-theme'
import Box from '../atoms/box'
import Paragraph from '../atoms/paragraph'
import HeaderWrapper from '../molecules/header-wrapper'
import ChevronLeft from '../molecules/chevron-left'

const HeaderChecklist: React.FC = () => {
  const navigation = useNavigation()
  const theme = useActiveTheme()

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <HeaderWrapper>
      <Box flex={1} backgroundColor={theme.primary} justifyContent="center">
        <ChevronLeft onPress={handleGoBack} />
        <Paragraph
          family="BOLD"
          style={{ textTransform: 'uppercase', textAlign: 'center' }}
        >
          {moment().format('DD/MM/YYYY')}
        </Paragraph>
      </Box>
    </HeaderWrapper>
  )
}

export default HeaderChecklist
