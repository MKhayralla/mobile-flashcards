import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons as Icon } from '@expo/vector-icons'
import mainStyles from '../utils/styles'
import colors from '../utils/colors'
import { clearLocalNotifications, setLocalNotification } from '../utils/notifications'

const Quiz = ({ deck, navigation }) => {
    const [index, setIndex] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [answer, showAnswer] = useState(false)
    const [result, showResult] = useState(false)
    const questions = deck ? deck.questions : undefined
    const nQuestions = questions ? questions.length : 0
    const reset = () => {
        setIndex(0)
        setRightAnswers(0)
        showAnswer(false)
        showResult(false)
    }
    const check_index = (correct) => {
        if (correct) {
            setRightAnswers(rightAnswers + 1)
        }
        if (index === nQuestions - 1) {
            clearLocalNotifications()
                .then(setLocalNotification)
                .then(() => showResult(true))
                .catch()
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
                    {Platform.OS === 'ios' && <Icon name='ios-alert' style={mainStyles.cardText} /> || <Icon name='md-alert'
                        style={mainStyles.cardText} />}
                    <Text style={mainStyles.cardText}>No questions Added yet</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('details', { title: deck.title })}
                        style={[mainStyles.inputCommon, mainStyles.button, { maxHeight: 60 }]}>
                        <Text style={mainStyles.buttonText}>Go Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        !questions ? (
            <View style={[mainStyles.container, mainStyles.card]}>
                {Platform.OS === 'ios' && <Icon name='ios-alert' style={mainStyles.cardText} /> || <Icon name='md-alert'
                    style={mainStyles.cardText} />}
                <Text style={mainStyles.cardText}>
                    deck doesn't exist
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('home')}
                    style={[mainStyles.inputCommon, mainStyles.button, { maxHeight: 60 }]}>
                    <Text style={mainStyles.buttonText}>Back to Decks</Text>
                </TouchableOpacity>
            </View>
        ) : (
                <View style={mainStyles.container}>
                    <View style={mainStyles.row}>
                        <Text style={{color : colors.red}}>{`remaining questions : ${result?0:questions.length - index}`}</Text>
                    </View>
                    {
                        result ? (
                            <View style={mainStyles.card}>
                                <Text
                                    style={mainStyles.cardText}>
                                    {`your result is :\n${rightAnswers}/${questions.length}(${Math.round(rightAnswers / questions.length * 100)}%)\n`}
                                </Text>
                                <View style={mainStyles.row}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('details', { title: deck.title })}
                                        style={[mainStyles.inputCommon, mainStyles.button, { maxHeight: 60 }]}>
                                        <Text style={mainStyles.buttonText}>Back to Deck</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={reset}
                                        style={[mainStyles.inputCommon, mainStyles.button, { maxHeight: 60 }]}>
                                        <Text style={mainStyles.buttonText}>Retake Quiz</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        ) : (
                                <View style={mainStyles.card}>
                                    {
                                        (!answer) ? (
                                            <TouchableOpacity
                                                onPress={() => showAnswer(true)}
                                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
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
                                                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                                        <Text style={mainStyles.cardText}>
                                                            {
                                                                questions[index].answer + '\nwas your guess right ?'
                                                            }
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View style={[mainStyles.row, { alignSelf: 'baseline' }]}>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(true)}
                                                            style={[mainStyles.greenButtonFrame,
                                                            mainStyles.greenButton,
                                                            { flex: 0.5 }]}>
                                                            <Text style={mainStyles.greenButtonText}>
                                                                Yes
                                                        </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={() => check_index(false)}
                                                            style={[mainStyles.redButtonFrame,
                                                            mainStyles.redButton,
                                                            { flex: 0.5 }]}>
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
