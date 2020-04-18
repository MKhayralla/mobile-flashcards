import React from 'react'
import {SimpleLineIcons} from '@expo/vector-icons'
import { TouchableOpacity , StyleSheet } from 'react-native'
import colors from '../utils/colors'

export default function({toDo}) {
    const fn = toDo ? toDo : () => {}
    return (
        <TouchableOpacity onPress={fn} style={styles.addButton}>
            <SimpleLineIcons name={'plus'} color={colors.light} style={{fontSize : 50,
                                                                        textAlign : 'right',
                                                                        backgroundColor : colors.dark,
                                                                        borderRadius : 25,}} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems: 'flex-end',
        padding : 5,
        position : 'absolute',
        bottom : 5,
    }
})
