import AsyncStorage from '@react-native-community/async-storage'
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import DaysListReducer from './days-list-reducer'

const rootReducer = combineReducers({
  daysList: DaysListReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authentification'],
  blacklist: ['theme', 'cart'],
}

export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

export const persistor = persistStore(store as any)

export default store
