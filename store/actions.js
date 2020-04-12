export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receive(decks) {
    return {
        type : RECEIVE_DECKS,
        decks
    }
}

export function add_deck(title) {
    return {
        type : ADD_DECK,
        title
    }
}

export function remove_deck(title) {
    return {
        type : REMOVE_DECK,
        title
    }
}

export function add_question(info) {
    return {
        type : ADD_QUESTION,
        ...info
    }
}