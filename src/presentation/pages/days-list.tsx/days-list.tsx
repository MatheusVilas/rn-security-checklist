import React from 'react'
import Container from '../../components/atoms/container'
import Divisor from '../../components/atoms/divisor'

import SafeArea from '../../components/atoms/safe-area'
import CompleteList from '../../components/organisms/complete-list'
import HeaderDayList from '../../components/organisms/header-day-list'
import TodayCard from '../../components/organisms/today-card'

type DaysListType = {
  newCheckList: () => void
}

const Dayslist: React.FC<DaysListType> = ({ newCheckList }) => (
  <SafeArea>
    <HeaderDayList />
    <Container>
      <TodayCard goToChecklist={newCheckList} />
      <Divisor />
      <CompleteList />
    </Container>
  </SafeArea>
)

export default Dayslist
