import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParamList } from './index'

type CheckListRouteProp = RouteProp<RootNavigationParamList, 'Checklist'>

type CheckListNavigationProp = StackNavigationProp<
  RootNavigationParamList,
  'Checklist'
>

export type CheckListProps = {
  route: CheckListRouteProp
  navigation: CheckListNavigationProp
}
