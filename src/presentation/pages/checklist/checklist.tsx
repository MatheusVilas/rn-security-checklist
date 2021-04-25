import React, { useEffect, useState } from 'react'
import { ProtectiveEquipamentModel } from '../../../domain/models'
import { LoadProtectiveEquipament } from '../../../domain/usecases'

import SafeArea from '../../components/atoms/safe-area'
import Loading from '../../components/molecules/loading'
import CheckListItems from '../../components/organisms/check-list-items'
import HeaderChecklist from '../../components/organisms/header-checklist'
import useShowMessage from '../../hooks/use-show-theme'

type CheckListProps = {
  loadCheckList: LoadProtectiveEquipament
}

const Checklist: React.FC<CheckListProps> = ({ loadCheckList }) => {
  const [, showErrorMessage] = useShowMessage()
  const [items, setItems] = useState<ProtectiveEquipamentModel>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = () => {
    setIsLoading(true)
    loadCheckList
      .load()
      .then(items => {
        setItems(items)
      })
      .catch(err => {
        showErrorMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <SafeArea>
      <HeaderChecklist />

      {isLoading ? (
        <Loading />
      ) : (
        <CheckListItems list={items} refresh={fetchItems} />
      )}
    </SafeArea>
  )
}

export default Checklist
