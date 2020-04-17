import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handle_add_question } from '../store/shared'
import mainStyles from '../utils/styles'
import { mediumaquamarine, titles } from '../utils/colors'

const AddQuestion = ({ add_question, route }) => {
    const title = route.params.title
    const [q, setQuestion] = useState('')
    const [a, setAnswer] = useState('')
    const handle_submit = () => {
        if (q.trim() == '') {
            return alert('you should Enter a question')
        }
        if (a.trim() == '') {
            return alert('you should Enter an answer')
        }
        try {
            const question = q
            const answer = a
            add_question({ title, question, answer })
            setQuestion('')
            setAnswer('')
        } catch (err) {
            alert(new Error(err).message)
        }
    }
    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.row}>
                <Text style={{ color: titles }}>
                    Enter the question
                </Text>
            </View>
            <View style={mainStyles.row}>
                <TextInput style={styles.input} value={q}
                    onChangeText={(i) => setQuestion(i)}
                />
            </View>
            <View style={mainStyles.row}>
                <Text style={{ color: titles }}>
                    Enter the answer
                </Text>
            </View>
            <View style={mainStyles.row}>
                <TextInput style={styles.input} value={a}
                    onChangeText={(i) => setAnswer(i)}
                />
            </View>
            <View style={mainStyles.row}>
                <TouchableOpacity style={[styles.input, { backgroundColor: mediumaquamarine }]}
                    onPress={() => handle_submit()}>
                    <Text style={{ color: '#ffffff', }}>
                        Add Question
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginTop: 5,
        padding: 2,
        justifyContent: 'center',
        height: 30,
    }
})


const mapDispatchToProps = (dispatch) => {
    const add_question = ({title, question, answer}) => dispatch(handle_add_question(title, question, answer))
    return { add_question }
}

export default connect(undefined, mapDispatchToProps)(AddQuestion)