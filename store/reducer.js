import {RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, REMOVE_DECK} from './actions'

export default function(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return action.decks
        case ADD_DECK:
            return {...state, [action.title] : {title : action.title, questions : []}}
        case REMOVE_DECK:
            let decks = {...state}
            delete decks[action.title]
            return decks
        case ADD_QUESTION:
            const {title, question, answer} = action
            return {...state,
                [title] :{...state[title],
                    questions : state[title].questions.concat({question, answer})}}
        default:
            return state
    }
}