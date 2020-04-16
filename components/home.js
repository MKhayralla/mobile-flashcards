import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { receive_data, handle_add_question, handle_delete_deck } from '../store/shared'
import { titles, numbers, red, aquamarine, mediumaquamarine } from '../utils/colors'
import mainStyles from '../utils/styles'
import Add from './addButton'

const Deck = (props) => {
  const { title, questions } = props
  const nCards = questions.length
  return (
    <View style={[mainStyles.row, styles.deckStyles]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.number}>
          {nCards}
        </Text>
        <Text style={styles.bodyText}>
          cards
      </Text>
      </View>
    </View>
  )
}


function Home(props) {
  const { decks, initiate } = props
  useEffect(() => {
    initiate()
  }, [initiate])
  const renderItem = ({ item }) => (<Deck {...item} />)
  return (
    <View style={mainStyles.container}>
        <FlatList data={decks} renderItem={renderItem} keyExtractor={(item) => item.title} />
        <Add toDo={() => {}} />
    </View>
  );
}
const mapStateToProps = (state) => {
  const decks = Object.values(state)
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
  deckStyles: {
    shadowColor: mediumaquamarine,
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.3
  },
  title: {
    fontSize: 20,
    color: titles,
    flex: 0.8,
    paddingLeft: 5,
  },
  counter: {
    flex: 0.2,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: aquamarine,
    borderRadius: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  number: {
    fontFamily: 'Arial',
    textShadowColor: titles,
    fontSize: 24,
    fontWeight: 'bold',
    color: numbers,
    flex: 0.6,
  },
  bodyText: {
    color: red,
    fontSize: 18,
    flex: 0.4,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)
