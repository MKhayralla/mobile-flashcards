import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import { handle_add_question } from '../store/shared'
import mainStyles from '../utils/styles'

const AddQuestion = ({ add_question, route }) => {
    const title = route.params.title
    const [q, setQuestion] = useState('')
    const [a, setAnswer] = useState('')
    const handle_submit = () => {
        if (q.trim() == '') {
            return Alert.alert('missing question',
            'you should enter something in the question field',
            [{text : 'OK'}],
            {cancelable : true})
        }
        if (a.trim() == '') {
            return Alert.alert('missing answer',
            'you should enter something in the answer field',
            [{text : 'OK'}],
            {cancelable : true})
        }
        try {
            const question = q
            const answer = a
            add_question({ title, question, answer })
            setQuestion('')
            setAnswer('')
            Alert.alert('success',
            'you successfully added the new question',
            [{text : 'OK'}],
            {cancelable : true})
        } catch (err) {
            Alert.alert('Error',
            new Error(err).message,
            [{text : 'OK'}],
            {cancelable : true})
        }
    }
    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.row}>
                <TextInput style={[mainStyles.inputCommon, mainStyles.textInput]} value={q}
                    onChangeText={(i) => setQuestion(i)}
                    placeholder="Question ?!"
                />
            </View>
            <View style={mainStyles.row}>
                <TextInput style={[mainStyles.inputCommon, mainStyles.textInput]} value={a}
                    onChangeText={(i) => setAnswer(i)}
                    placeholder="Answer .!"
                />
            </View>
            <View style={mainStyles.row}>
                <TouchableOpacity style={[mainStyles.inputCommon, mainStyles.button]}
                    onPress={() => handle_submit()}>
                    <Text style={mainStyles.buttonText}>
                        Add Question
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}





const mapDispatchToProps = (dispatch) => {
    const add_question = ({title, question, answer}) => dispatch(handle_add_question(title, question, answer))
    return { add_question }
}

export default connect(undefined, mapDispatchToProps)(AddQuestion)
