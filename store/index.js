import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk, logger))