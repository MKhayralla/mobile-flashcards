import { receive, add_deck, remove_deck, add_question } from './actions'
import * as API from '../api'

export function receive_data() {
    return (dispatch) => {
        API.get_decks()
            .then((decks) => {
                dispatch(receive(decks))
            })
            .catch((err) => {
                throw new Error(err)
            })
    }
}


export function handle_add_deck(title) {
    return (dispatch) => {
        dispatch(add_deck(title))
        API.create_deck(title)
            .catch((err) => {
                dispatch(remove_deck(title))
                throw new Error(err)
            })
    }
}

export function handle_delete_deck(title) {
    return (dispatch) => {
        dispatch(remove_deck(title))
        API.remove_deck(title)
            .catch((err) => {
                dispatch(add_deck(title))
                throw new Error(err)
            })
    }
}


export function handle_add_question(title, question, answer) {
    return (dispatch) => {
        API.add_question(title, question, answer)
            .then(dispatch(add_question({title, question, answer})))
            .catch((err) => {
                throw new Error(err)
            })
    }
}