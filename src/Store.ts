import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './Redux'

const store: any = createStore(rootReducer, applyMiddleware(logger))

export default store