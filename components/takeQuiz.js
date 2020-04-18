import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import mainStyles from '../utils/styles'

const Quiz = ({ deck, navigation }) => {
    const [index, setIndex] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [answer, showAnswer] = useState(false)
    const [result, showResult] = useState(false)
    const questions = deck ? deck.questions : undefined
    const nQuestions = questions ? questions.length : 0
    const check_index = (correct) => {
        if (correct) {            
            setRightAnswers(rightAnswers + 1)
        }
        if (index === nQuestions - 1)  {
            showResult(true)
        } 
        else {
            setIndex(index + 1)
        }
        showAnswer(false)
    }
    if (questions && questions.length < 1) {
        return (
            <View style={mainStyles.container}>
                <View style={mainStyles.card}>
                    <Text style={mainStyles.cardText}>No questions Added yet</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('details', {title : deck.title})}
                    style={[mainStyles.inputCommon, mainStyles.button, {maxHeight : 60}]}>
                        <Text style={mainStyles.buttonText}>Go Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        !questions ? (
            <View style={[mainStyles.container, mainStyles.card]}>
                <Text style={mainStyles.cardText}>
                    deck doesn't exist
                </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                style={[mainStyles.inputCommon, mainStyles.button, {maxHeight : 60}]}>
                    <Text style={mainStyles.buttonText}>Back to Decks</Text>
                </TouchableOpacity>
            </View>
        ) : (
                <View style={mainStyles.container}>
                    {
                        result ? (
                            <View style={mainStyles.card}>
                                <Text
                                style={mainStyles.cardText}>
                                    {`your result is :\n${rightAnswers}/${questions.length}(${Math.round(rightAnswers/questions.length*100)}%)\n`}
                                </Text>
                                <TouchableOpacity
                                onPress={() => navigation.navigate('home')}
                                style={[mainStyles.inputCommon, mainStyles.button, {maxHeight : 60}]}>
                                    <Text style={mainStyles.buttonText}>Back to Decks</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                                <View style={mainStyles.card}>
                                    {
                                        (!answer) ? (
                                            <TouchableOpacity
                                                onPress={() => showAnswer(true)}
                                                style={{flex : 1, alignItems : 'center', justifyContent : 'center',}}>
                                                <Text style={mainStyles.cardText}>
                                                    {
                                                        questions[index].question
                                                    }
                                                </Text>
                                            </TouchableOpacity>
                                        ) : (
                                                <View>
                                                    <TouchableOpacity
                                                        onPress={() => showAnswer(false)}
                                                        style={{flex : 1, alignItems : 'center', justifyContent : 'center',}}>
                                                        <Text style={mainStyles.cardText}>
                                                            {
                                                                questions[index].answer + '\nwas your guess right ?'
                                                            }
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View style={[mainStyles.row, {alignSelf : 'baseline'}]}>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(true)}
                                                            style={[mainStyles.greenButtonFrame,
                                                            mainStyles.greenButton,
                                                            {flex : 0.5}]}>
                                                            <Text style={mainStyles.greenButtonText}>
                                                                Yes
                                                        </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(false)}
                                                            style={[mainStyles.redButtonFrame,
                                                                mainStyles.redButton,
                                                                {flex : 0.5}]}>
                                                            <Text style={mainStyles.greenButtonText}>
                                                                No
                                                        </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </ View>
                                            )
                                    }
                                </View>
                            )
                    }
                </View>
            )
    )
}


const mapStateToProps = (state, { route, navigation }) => {
    const title = route.params.title
    const deck = state[title]
    return { deck, navigation }
}

export default connect(mapStateToProps)(Quiz)
