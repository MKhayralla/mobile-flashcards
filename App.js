import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
//import AddDeck from './components/addDeck'
import Home from './components/home'
//import ShowDeck from './components/showDeck'
import AddQuestion from './components/addQuestion'
import Quiz from './components/takeQuiz'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <AddQuestion title={'Food'} />
      <Quiz title={'Food'} />
    </ Provider>
  )}



