import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import useActiveTheme from '../../hooks/use-active-theme'
import { Spacing } from '../../styles'
import { scaleSize } from '../../styles/mixins'
import Box from '../atoms/box'
import Container from '../atoms/container'
import Paragraph from '../atoms/paragraph'
import Button from '../molecules/button'
import CheckItem from '../molecules/check-item'

const CheckListItems: React.FC = () => {
  const theme = useActiveTheme()

  return (
    <Box paddingVertical={Spacing.SPACING_MEDIUM} flex={1}>
      <Container>
        <Paragraph
          size="EXTRA_SMALL"
          style={{ textAlign: 'right', marginBottom: Spacing.SPACING_MEDIUM }}
          color="contentOnColor"
        >
          00/06 COMPLETOS
        </Paragraph>
        <ScrollView bounces={false}>
          <CheckItem isActive onPress={() => {}}>
            Óculos
          </CheckItem>
          <CheckItem onPress={() => {}}>Óculos</CheckItem>
        </ScrollView>
        <Box marginTop="auto">
          <Button bgColor="primary" onPress={() => {}}>
            SALVAR
          </Button>
          <Box marginTop={Spacing.SPACING_SMALL}>
            <Paragraph
              color="contentOnColor"
              size="EXTRA_SMALL"
              style={{ textAlign: 'center' }}
            >
              SALVO EM XX/XX/XX XX:XX:XX
            </Paragraph>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CheckListItems
