import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receive_data, handle_add_deck, handle_add_question, handle_delete_deck } from '../store/shared'
function Parent(props) {
  const { decks, initiate, add_deck, remove_deck, add_question } = props
  useEffect(() => {
    initiate()
  }, [initiate])
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(decks, undefined, 4)}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => add_deck('health')}>
          <Text>add new deck with title "health"</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => remove_deck('health')}>
          <Text>x</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => add_question('health', 'how do we stay healthy?', 'exercise')}>
          <Text>+</ Text>
        </ TouchableOpacity>
      </ View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => add_deck('covid-19')}>
          <Text>add new deck with title "covid-19"</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() =>  remove_deck('covid-19')}>
          <Text>x</ Text>
        </ TouchableOpacity>
        <TouchableOpacity onPress={() => add_question('covid-19', 'how does covid-19 infect a person?', 'droplet')}>
          <Text>+</ Text>
        </ TouchableOpacity>
      </ View>
    </View>
  );
}
const mapStateToProps = (state) => {
  const decks = state
  return { decks }
}
const mapDispatchToProps = (dispatch) => {
  const initiate = () => dispatch(receive_data())
  const add_deck = (title) => dispatch(handle_add_deck(title))
  const remove_deck = (title) => dispatch(handle_delete_deck(title))
  const add_question = (title, question, answer) => dispatch(handle_add_question(title, question, answer))
  return { initiate, add_deck, remove_deck, add_question }
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
export default connect(mapStateToProps, mapDispatchToProps)(Parent)
