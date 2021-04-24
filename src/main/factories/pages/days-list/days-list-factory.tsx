import React from 'react'

import Dayslist from '../../../../presentation/pages/days-list.tsx/days-list'
import { DaysListProps } from '../../../routes/@types/day-list-screen'

const makeDaysList: React.FC<DaysListProps> = ({ navigation }) => {
  const goToCheckList = (id: string) => {
    navigation.navigate('Checklist', {
      id,
    })
  }

  const createNewItem = () => {
    const id = 'aa'
    goToCheckList(id)
  }

  return <Dayslist newCheckList={createNewItem} />
}

export default makeDaysList
