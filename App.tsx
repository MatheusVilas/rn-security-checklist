import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { PersistGate } from 'redux-persist/integration/react'
import {
  useFonts,
  Exo2_400Regular,
  Exo2_700Bold,
} from '@expo-google-fonts/exo-2'

import RootNavigation from './src/main/routes/router'
import store, { persistor } from './src/main/store'
import ThemeWrapper from './src/presentation/util/theme-context'

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: Exo2_400Regular,
    bold: Exo2_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper>
          <StatusBar />
          <RootNavigation />
        </ThemeWrapper>
      </PersistGate>
    </ReduxProvider>
  )
}
