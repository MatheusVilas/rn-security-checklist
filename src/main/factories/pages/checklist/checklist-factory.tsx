import React from 'react'
import Checklist from '../../../../presentation/pages/checklist/checklist'

import { CheckListProps } from '../../../routes/@types/check-list-screen'
import makeRemoteLoadSurveyResult from '../../usecases/remote-load-protective-equipament-factory'

const makeDaysList: React.FC<CheckListProps> = () => (
  <Checklist loadCheckList={makeRemoteLoadSurveyResult()} />
)

export default makeDaysList
