import React, { useMemo, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { ProductEquipament } from '../../../domain/models'
import { add } from '../../../main/store/days-list-reducer'

import { Spacing } from '../../styles'
import Box from '../atoms/box'
import Container from '../atoms/container'
import Paragraph from '../atoms/paragraph'
import Button from '../molecules/button'
import CheckItem from '../molecules/check-item'

interface ListType extends ProductEquipament {
  status: boolean
}

type CheckListItemsProps = {
  list: ProductEquipament[]
  refresh: () => void
}

const CheckListItems: React.FC<CheckListItemsProps> = ({ list, refresh }) => {
  const dispatch = useDispatch()
  const [isCompleted, setIsCompleted] = useState(false)

  const [data, setData] = useState<ListType[]>(
    list.map(item => ({
      ...item,
      status: false,
    })),
  )

  const completeItems = useMemo(() => data.filter(item => item.status), [data])

  const renderItem = ({ item }: { item: ListType }) => {
    const handlePress = () => {
      if (isCompleted) return
      const newData = data.map(row => {
        if (item.name === row.name) {
          return { ...row, status: !row.status }
        }
        return row
      })
      setData(newData)
    }

    return (
      <CheckItem isActive={item.status} onPress={handlePress}>
        {item.name}
      </CheckItem>
    )
  }

  const handleComplete = () => {
    dispatch(add())
    setIsCompleted(true)
  }

  return (
    <Box paddingVertical={Spacing.SPACING_MEDIUM} flex={1}>
      <Container>
        {data.length > 0 && (
          <Paragraph
            size="EXTRA_SMALL"
            style={{ textAlign: 'right', marginBottom: Spacing.SPACING_MEDIUM }}
            color="contentOnColor"
          >
            {completeItems.length}/{data.length} CHECKED
          </Paragraph>
        )}

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ListEmptyComponent={() => (
            <TouchableOpacity onPress={refresh}>
              <Paragraph
                color="contentOnColor"
                style={{ textDecorationLine: 'underline' }}
              >
                Try again
              </Paragraph>
            </TouchableOpacity>
          )}
        />

        <Box marginTop="auto">
          {data.length > 0 && (
            <Button
              disabled={data.length !== completeItems.length || isCompleted}
              bgColor="primary"
              onPress={handleComplete}
            >
              {isCompleted ? 'OK!' : 'SAVE'}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default CheckListItems
