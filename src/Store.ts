import { createStore, combineReducers } from 'redux'
import rootReducer from './Redux/RootReducer'

const store: any = createStore(rootReducer)

export default store