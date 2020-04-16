import React from 'react'
import {SimpleLineIcons} from '@expo/vector-icons'
import { TouchableOpacity , StyleSheet } from 'react-native'
import {mediumaquamarine} from '../utils/colors'

export default function({toDo}) {
    const fn = toDo ? toDo : () => {}
    return (
        <TouchableOpacity onPress={fn} style={styles.addButton}>
            <SimpleLineIcons name={'plus'} color={mediumaquamarine} style={ {fontSize : 50}} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton : {
        flex : 1,
        padding : 5,
        alignSelf : 'flex-end',
        flexDirection : 'row'
    }
})