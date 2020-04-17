import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import mainStyles from '../utils/styles'
import { numbers, red, green } from '../utils/colors'

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
                <Text>
                    No questions Added yet
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('details', {title : deck.title})}>
                    <Text>
                        Go Back to Deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        !questions ? (
            <View style={mainStyles.container}>
                <Text>
                    deck doesn't exist
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Text>Back to Decks</Text>
                </TouchableOpacity>
            </View>
        ) : (
                <View style={mainStyles.container}>
                    {
                        result ? (
                            <View style={mainStyles.container}>
                                <Text>{rightAnswers}/{questions.length}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                                    <Text>Back to Decks</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                                <View>
                                    {
                                        (!answer) ? (
                                            <TouchableOpacity
                                                onPress={() => showAnswer(true)}>
                                                <Text style={styles.questionBody}>
                                                    {
                                                        questions[index].question
                                                    }
                                                </Text>
                                            </TouchableOpacity>
                                        ) : (
                                                <View>
                                                    <TouchableOpacity
                                                        onPress={() => showAnswer(false)}>
                                                        <Text style={styles.questionBody}>
                                                            {
                                                                questions[index].answer + '\nwas your guess right ?'
                                                            }
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View style={mainStyles.row}>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(true)}
                                                            style={[styles.button, styles.green]}>
                                                            <Text style={styles.buttonText}>
                                                                Yes
                                                        </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(false)}
                                                            style={[styles.button, styles.red]}>
                                                            <Text style={styles.buttonText}>
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

const styles = StyleSheet.create({
    button: {
        flex: 0.5,
        height: 30,
        alignItems : 'center',
        padding : 5,
    },
    buttonText: {
        color: '#ffffff',
    },
    red: {
        backgroundColor: red,
    },
    green: {
        backgroundColor: green,
    },
    questionBody: {
        fontSize: 28,
        color: numbers,
    }
})

const mapStateToProps = (state, { route, navigation }) => {
    const title = route.params.title
    const deck = state[title]
    return { deck, navigation }
}

export default connect(mapStateToProps)(Quiz)