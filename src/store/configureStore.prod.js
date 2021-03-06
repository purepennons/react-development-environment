import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from '../reducers/'
import history from './history'

const initialState = {}

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk, promiseMiddleware(), routerMiddleware(history))
  )
)
