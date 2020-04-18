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
            borderRadius : 5,
            shadowColor : colors.dark,
            shadowRadius : 5,
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
            borderRadius : 5,
            shadowColor : colors.green,
            shadowRadius : 5,
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
            borderRadius : 5,
            shadowColor : colors.red,
            shadowRadius : 5,
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
            backgroundColor : colors.light,
            minHeight : 100,
            borderColor : colors.dark,
            borderWidth : 1,
            borderRadius : 20,
            margin : 20,
        },
        cardText : {
            fontSize : 24,
            textAlign : 'center',
            textAlignVertical : 'center',
            color : colors.dark,
            textShadowColor : colors.light,
            textShadowOffset : {
                height : 2,
                width : 2,
            },
            fontWeight : 'bold',
        },
        title : {
            flex : 1,
            fontSize : 30,
            fontWeight : 'bold',
            textAlign : 'center',
            textAlignVertical : 'center',
            color : colors.dark,
            textShadowColor : colors.light,
            textShadowOffset : {
                height : 2,
                width : 2,
            },
        },
        textInput : {
            fontSize : 18,
            fontWeight : 'bold',
            color : colors.dark,
            textAlign : 'center',
            textAlignVertical : 'center',
        }
    }
)
