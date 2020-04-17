import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receive_data, handle_add_question, handle_delete_deck } from '../store/shared'
import { titles, numbers, red, aquamarine, mediumaquamarine } from '../utils/colors'
import mainStyles from '../utils/styles'
import Add from './addButton'

const Deck = (props) => {
  const { title, questions, navigation } = props
  const nCards = questions.length
  return (
    <TouchableOpacity style={[mainStyles.row, styles.deckStyles]}
    onPress={() => navigation.navigate('details', {title})}>
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
    </TouchableOpacity>
  )
}


function Home(props) {
  const { decks, initiate, navigation } = props
  useEffect(() => {
    initiate()
  }, [initiate])
  const renderItem = ({ item }) => (<Deck {...item} navigation={navigation} />)
  return (
    <View style={mainStyles.container}>
      <FlatList data={decks} renderItem={renderItem} keyExtractor={(item) => item.title} />
      <Add toDo={() => { navigation.navigate('addDeck') }} />
    </View>
  );
}
const mapStateToProps = (state, {navigation}) => {
  const decks = Object.values(state)
  return { decks, navigation }
}
const mapDispatchToProps = (dispatch) => {
  const initiate = () => dispatch(receive_data())
  return { initiate }
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
