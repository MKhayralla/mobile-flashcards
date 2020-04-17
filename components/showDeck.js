import React from 'react'
import { connect } from 'react-redux'
import { handle_delete_deck } from '../store/shared'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import mainStyles from '../utils/styles'
import { titles, mediumaquamarine, aquamarine, red } from '../utils/colors'

const ShowDeck = (props) => {
    const { deck, remove_deck, navigation } = props
    const handle_remove = () => {
        remove_deck(deck.title)
        navigation.navigate('home')
    }
    if (deck) {
        return (
            <View style={mainStyles.container}>
                <View style={mainStyles.row}>
                    <Text style={[styles.element, styles.title]}>
                        {deck.title}
                    </Text>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('quiz', {title : deck.title})}>
                        <Text style={[styles.element, styles.button]}>Take Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('addQuestion', {title : deck.title})}>
                        <Text style={[styles.element, styles.button]}>Add Question</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity onPress={() => handle_remove()}>
                        <Text style={[styles.element, styles.remove]}>
                            Remove Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={mainStyles.container}></View>
        )
    }

}
const styles = StyleSheet.create(
    {
        element: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            padding: 5,
        },
        title: {
            color: titles,
            fontFamily: 'Arial',
            fontSize: 22,
            textAlign: 'center'
        },
        button: {
            backgroundColor: mediumaquamarine,
            borderBottomColor: aquamarine,
            borderBottomWidth: 1,
            color: '#ffffff',
            fontSize: 20,
        },
        remove: {
            backgroundColor: red,
            color: aquamarine,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: mediumaquamarine,
            fontSize: 20,
        },
    }
)

const mapStateToProps = (state, { navigation, route }) => {
    const title = route.params.title
    const deck = state[title]
    return { deck, navigation }
}
const mapDispatchToProps = (dispatch) => {
    const remove_deck = (title) => {
        dispatch(handle_delete_deck(title))
    }
    return { remove_deck }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDeck)