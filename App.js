import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Parent from './components/parent'
export default function App() {
  return (
    <Provider store={store}>
      <Parent />
    </ Provider>
  )}



