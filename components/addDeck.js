import React, {useState} from 'react'
import {TextInput, TouchableOpacity, View, Text, Alert } from 'react-native'
import {connect} from 'react-redux'
import { handle_add_deck } from '../store/shared'
import mainStyles from '../utils/styles'

const AddDeck = ({decks, add_deck}) => {
    const [title, setTitle] = useState('')
    const handle_submit = () => {
        if (decks[title]){
            return Alert.alert('Already Exists',
            `The deck name "${title}" already exists`,
            [{text : 'OK'}],
            {cancelable : true})
        }
        if (title.trim() === '') {
            return Alert.alert('Empty Title',
            'Please enter a deck title',
            [{text : 'OK'}],
            {cancelable : true})
        }
        try {
            add_deck(title)
            setTitle('')
            return Alert.alert('Success',
            `You successfully added a new deck with title of "${title}"`,
            [{text : 'OK'}],
            {cancelable : true})
        } catch (err) {
            return Alert.alert('Error',
            new Error(err).message,
            [{text : 'OK'}],
            {cancelable : true})
        }
    }
    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.row}>
                <Text style={mainStyles.title}>
                    Enter the deck title
                </Text>
            </View>
            <View style={mainStyles.row}>
                <TextInput style={[mainStyles.inputCommon, mainStyles.textInput]} value={title}
                onChangeText={(i) => setTitle(i)}
                placeholder="Deck title"
                 />
            </View>
            <View style={mainStyles.row}>
                <TouchableOpacity  style={[mainStyles.greenButtonFrame, mainStyles.greenButton, {flex : 1,}]}
                onPress={() => handle_submit()}>
                    <Text style={[mainStyles.greenButtonText, {fontWeight : 'bold',}]}>
                        Add Deck
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const mapStateToProps = (state) => {
    const decks = state
    return {decks}
}

const mapDispatchToProps = (dispatch) => {
    const add_deck = (title) => dispatch(handle_add_deck(title))
    return { add_deck }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
