import {combineReducers} from 'redux'
import chocolateReducer from './choclateReducer'
import bookReducer from './bookReducer'

export const rootReducer = combineReducers(
{
  C1 : chocolateReducer,
  B1 : bookReducer
})

