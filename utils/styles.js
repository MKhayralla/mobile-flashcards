import { StyleSheet } from 'react-native'
import colors from './colors'
import { Platform } from 'react-native'

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            padding : 2,
            backgroundColor: colors.white,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 2,
        },
        inputCommon : {
            flex : 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin : 5,
            padding : 2,
            borderColor : colors.dark,
            borderWidth : 1,
            borderRadius : 20,
            shadowColor : colors.dark,
            shadowRadius : 20,
            shadowOffset : {
                height : 3,
                width : 3,
            },
            shadowOpacity : 0.5,
            height : 60,
        },
        button: Platform.OS === 'ios' ? (
            {
                backgroundColor : colors.white
            }
        ) : (
            {
                backgroundColor : colors.light
            }
        ),
        buttonText : {
            color : colors.dark,
            textAlign : 'center',
            textAlignVertical : 'center',
        },
        greenButtonFrame: {
            flexDirection : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor : colors.green,
            borderWidth : 1,
            borderRadius : 20,
            shadowColor : colors.green,
            shadowRadius : 20,
            shadowOffset : {
                height : 3,
                width : 3,
            },
            shadowOpacity : 0.5,
            margin : 5,
            padding : 2,
            height : 60,
        },
        redButtonFrame: {
            flexDirection : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor : colors.red,
            borderWidth : 1,
            borderRadius : 20,
            shadowColor : colors.red,
            shadowRadius : 20,
            shadowOffset : {
                height : 3,
                width : 3,
            },
            shadowOpacity : 0.5,
            margin : 5,
            padding : 2,
            height : 60,
        },
        greenButton: Platform.OS === 'ios' ? (
            {
                backgroundColor : colors.white
            }
        ) : (
            {
                backgroundColor : colors.green
            }
        ),
        greenButtonText : {
            color : Platform.OS === 'ios' ? colors.green : colors.white,
            textAlign : 'center',
            textAlignVertical : 'center',
        },
        redButton: Platform.OS === 'ios' ? (
            {
                backgroundColor : colors.white
            }
        ) : (
            {
                backgroundColor : colors.red
            }
        ),
        redButtonText : {
            color : Platform.OS === 'ios' ? colors.red : colors.white,
            textAlign : 'center',
            textAlignVertical : 'center',
        },
        card : {
            flex : 1,
            flexDirection : 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor : colors.grey,
            borderRadius : 20,
            margin : 20,
            padding : 5,
        },
        cardText : {
            fontSize : 16,
            textAlign : 'center',
            textAlignVertical : 'center',
            color : colors.black,
            fontWeight : 'bold',
        },
        title : {
            flex : 1,
            fontSize : 20,
            textAlign : 'center',
            textAlignVertical : 'center',
            color : colors.dark,
        },
        textInput : {
            fontSize : 14,
            fontWeight : 'bold',
            color : colors.dark,
            textAlign : 'center',
            textAlignVertical : 'center',
        }
    }
)
