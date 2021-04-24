import React from 'react'

import SafeArea from '../../components/atoms/safe-area'
import CheckListItems from '../../components/organisms/check-list-items'
import HeaderChecklist from '../../components/organisms/header-checklist'

const Checklist: React.FC = () => (
  <SafeArea>
    <HeaderChecklist />

    <CheckListItems />
  </SafeArea>
)

export default Checklist
