import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'

const SafeArea: React.FC = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>{children}</View>
  </SafeAreaView>
)

export default SafeArea
