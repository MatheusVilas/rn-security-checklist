import React from 'react'
import { CheckList } from '../../../main/store/days-list-reducer'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'
import Box from '../atoms/box'
import Icon from '../atoms/icon'
import Paragraph from '../atoms/paragraph'
import HeaderText from '../molecules/header-text'
import HeaderWrapper from '../molecules/header-wrapper'

const HeaderDayList: React.FC = () => {
  const theme = useActiveTheme()
  return (
    <HeaderWrapper>
      <Box flex={1} flexDirection="row">
        <HeaderText>CONTROL EPI</HeaderText>
        <Box
          paddingRight={Spacing.SPACING_MEDIUM}
          flex={1}
          justifyContent="flex-end"
          backgroundColor={theme.background}
          flexDirection="row"
          alignItems="center"
        >
          <Box marginRight={Spacing.SPACING_XXSMALL}>
            <Icon size={18} color="contentOnColor" type="user" />
          </Box>
          <Paragraph
            family="BOLD"
            size="LARGE"
            style={{ textAlign: 'right', textTransform: 'uppercase' }}
            color="contentOnColor"
          >
            MATHEUS
          </Paragraph>
        </Box>
      </Box>
    </HeaderWrapper>
  )
}

export default HeaderDayList
