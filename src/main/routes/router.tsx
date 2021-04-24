import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigationParamList } from './@types'
import makeDaysList from '../factories/pages/days-list/days-list-factory'
import makeChecklist from '../factories/pages/checklist/checklist-factory'

const Stack = createStackNavigator<RootNavigationParamList>()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="DaysList">
        <Stack.Screen name="DaysList" component={makeDaysList} />

        <Stack.Screen name="Checklist" component={makeChecklist} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
