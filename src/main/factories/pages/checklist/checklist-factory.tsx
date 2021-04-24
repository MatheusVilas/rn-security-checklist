import React from 'react'
import Checklist from '../../../../presentation/pages/checklist/checklist'

import { CheckListProps } from '../../../routes/@types/check-list-screen'

const makeDaysList: React.FC<CheckListProps> = ({ navigation }) => {
  const goToCheckList = (id: string) => {
    navigation.navigate('Checklist', {
      id,
    })
  }

  const createNewItem = () => {
    const id = 'aa'
    goToCheckList(id)
  }

  return <Checklist />
}

export default makeDaysList
