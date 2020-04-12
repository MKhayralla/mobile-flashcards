//import asyncstorage module
import {AsyncStorage as db} from 'react-native'
//defining a  key for our database
const db_key = 'decks'

//clear
export function clear() {
    return db.clear()
}
//get all decks
export function get_decks() {
    return db.getItem(db_key)
    .then(async (decks) => {
        if (decks) {
            return JSON.parse(decks)
        } else {
            await db.setItem(db_key, JSON.stringify({}))
            return {}
        }
    })
}


//get a single deck
export function get_deck(title) {
    return db.getItem(db_key)
    .then((decks) => JSON.parse(decks)[title])
}


//create new deck
export async function create_deck(title) {
    return db.mergeItem(db_key, JSON.stringify({[title] : {title, questions:[]}}))
    .then(() => get_decks())
}

//remove a deck
export function remove_deck(title) {
    return get_decks()
    .then((decks) => {
        delete decks[title]
        return db.setItem(db_key, JSON.stringify(decks))
        .then(() => get_decks())
    })
}


//add  a question in an existing deck
export function add_question(title, question, answer) {
    const entry = {question, answer}
    return get_deck(title)
    .then((deck) => {
        const questions = deck.questions.concat(entry)
        return db.mergeItem(db_key, JSON.stringify({[title]:{title, questions}}))
        .then(() => get_deck(title))
    })
}
