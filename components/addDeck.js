import React, {useState} from 'react'
import {TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { handle_add_deck } from '../store/shared'
import mainStyles from '../utils/styles'
import {mediumaquamarine, titles} from '../utils/colors'

const AddDeck = ({decks, add_deck}) => {
    const [title, setTitle] = useState('')
    const handle_submit = () => {
        if (decks[title]){
            return alert('already exists')
        }
        if (title.trim == '') {
            return alert('you should Enter the deck name')
        }
        try {
            add_deck(title)
            setTitle('')
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.row}>
                <Text style={{color : titles}}>
                    Enter the deck title
                </Text>
            </View>
            <View style={mainStyles.row}>
                <TextInput style={styles.input} value={title}
                onChangeText={(i) => setTitle(i)}
                 />
            </View>
            <View style={mainStyles.row}>
                <TouchableOpacity  style={[styles.input, {backgroundColor : mediumaquamarine}]}
                onPress={() => handle_submit()}>
                    <Text style={{color : '#ffffff',}}>
                        Add Deck
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    input : {
        flex : 1,
        marginTop : 5,
        padding : 2,
        justifyContent : 'center',
        height : 30,
    }
})

const mapStateToProps = (state) => {
    const decks = state
    return {decks}
}

const mapDispatchToProps = (dispatch) => {
    const add_deck = (title) => dispatch(handle_add_deck(title))
    return { add_deck }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)