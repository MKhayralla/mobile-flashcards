import React from 'react'
import { connect } from 'react-redux'
import { handle_delete_deck } from '../store/shared'
import { View, Text, TouchableOpacity } from 'react-native'
import mainStyles from '../utils/styles'

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
                    <Text style={mainStyles.title}>
                        {`${deck.title} [${deck.questions.length} cards]`}
                    </Text>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('quiz', {title : deck.title})}
                    style={[mainStyles.inputCommon, mainStyles.button]}>
                        <Text style={mainStyles.buttonText}>Take Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('addQuestion', {title : deck.title})}
                    style={[mainStyles.inputCommon, mainStyles.button]}>
                        <Text style={mainStyles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.row}>
                    <TouchableOpacity
                    onPress={() => handle_remove()}
                    style={[mainStyles.redButtonFrame, mainStyles.redButton, {flex : 1}]}>
                        <Text style={mainStyles.redButtonText}>
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