import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as API from './api'

export default function App() {
  const api = API
  const [decks, updateDecks] = useState([])
  useEffect(() => {
    API.clear()
      .then(() => API.get_decks().then((data) => {
        updateDecks(Object.values(data))
      }))
  }, [api])
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(decks)}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          api.create_deck('health')
            .then((data) => {
              updateDecks(Object.values(data))
            })
        }}><Text>add new deck with title "health"</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => {
          api.remove_deck('health')
            .then((data) => {
              updateDecks(Object.values(data))
            })
        }}><Text>x</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => {
          api.add_question('health', 'how do we stay healthy?', 'exercise')
            .then((deck) => {
              alert(JSON.stringify(deck))
            })
        }}><Text>+</ Text>
        </ TouchableOpacity>
      </ View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          api.create_deck('covid-19')
            .then((data) => {
              updateDecks(Object.values(data))
            })
        }}><Text>add new deck with title "covid-19"</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => {
          api.remove_deck('covid-19')
            .then((data) => {
              updateDecks(Object.values(data))
            })
        }}><Text>x</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => {
          api.add_question('covid-19', 'how does covid-19 infect a person?', 'droplet')
            .then((deck) => {
              alert(JSON.stringify(deck))
            })
        }}><Text>+</ Text>
        </ TouchableOpacity>
      </ View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
