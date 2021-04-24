import React from 'react'
import Container from '../../components/atoms/container'
import Divisor from '../../components/atoms/divisor'

import SafeArea from '../../components/atoms/safe-area'
import CompleteList from '../../components/organisms/complete-list'
import HeaderDayList from '../../components/organisms/header-day-list'
import TodayCard from '../../components/organisms/today-card'
import useTypedSelector from '../../hooks/use-typed-selector'

type DaysListType = {
  newCheckList: () => void
}

const Dayslist: React.FC<DaysListType> = ({ newCheckList }) => {
  const checkListItems = useTypedSelector(state => state.daysList.list)

  return (
    <SafeArea>
      <HeaderDayList />
      <Container>
        <TodayCard list={checkListItems} goToChecklist={newCheckList} />
        <Divisor />
        <CompleteList list={checkListItems} />
      </Container>
    </SafeArea>
  )
}

export default Dayslist
