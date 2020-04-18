import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import AddDeck from './components/addDeck'
import Home from './components/home'
import ShowDeck from './components/showDeck'
import AddQuestion from './components/addQuestion'
import Quiz from './components/takeQuiz'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import colors from './utils/colors'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="home"
        screenOptions={
          {
            headerStyle : {
              backgroundColor : colors.dark,
            },
            headerTintColor : colors.white,
            headerTitleStyle : {
              fontWeight : 'bold',
            }
          }
        }>
          <Stack.Screen name="home" component={Home} options={{title : 'decks'}} />
          <Stack.Screen name="addDeck" component={AddDeck} options={{title : 'add deck'}} />
          <Stack.Screen name="details" component={ShowDeck} options={({route}) => ({title:route.params.title})} />
          <Stack.Screen name="quiz" component={Quiz} options={({route}) => ({title:route.params.title})} />
          <Stack.Screen name="addQuestion" component={AddQuestion} options={({route}) => ({title:route.params.title})} />
        </Stack.Navigator>
      </NavigationContainer>
    </ Provider>
  )}



