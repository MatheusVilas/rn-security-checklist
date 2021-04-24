import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationParamList } from './index'

type DaysListRouteProp = RouteProp<RootNavigationParamList, 'DaysList'>

type DaysListNavigationProp = StackNavigationProp<
  RootNavigationParamList,
  'DaysList'
>

export type DaysListProps = {
  route: DaysListRouteProp
  navigation: DaysListNavigationProp
}
