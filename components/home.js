import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { receive_data } from '../store/shared'
import colors from '../utils/colors'
import mainStyles from '../utils/styles'
import Add from './addButton'
import { setLocalNotification } from '../utils/notifications'

const Deck = (props) => {
  const { title, questions, navigation } = props
  const nCards = questions.length
  return (
    <View style={mainStyles.row}>
      <TouchableOpacity style={mainStyles.inputCommon}
        onPress={() => navigation.navigate('details', { title })}>
        <Text style={[mainStyles.title, { flex: 0.7 }]}>
          {title}
        </Text>
        <View style={styles.counter}>
          <Text style={styles.number}>
            {nCards}
          </Text>
          <Icon name={Platform.OS === 'ios' ? 'cards-outline' : 'cards'} style={styles.bodyText} />
        </View>
      </TouchableOpacity>
    </View>
  )
}


function Home(props) {
  const { decks, initiate, navigation } = props
  useEffect(() => {
    setLocalNotification()
    .then(initiate)
    .catch()
  }, [initiate])
  const renderItem = ({ item }) => (<Deck {...item} navigation={navigation} />)
  return (
    <View style={mainStyles.container}>
      <FlatList data={decks} renderItem={renderItem} keyExtractor={(item) => item.title} />
      <View style={{flexDirection : 'row-reverse'}}><Add toDo={() => { navigation.navigate('addDeck') }} /></ View>
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
  counter: {
    flex: 0.3,
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,
    flex: 0.4,
  },
  bodyText: {
    color: colors.dark,
    fontSize: 18,
    flex: 0.6,
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
