const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'HiHi'},
        {id: 3, message: 'Lol'},
    ],
    dialogs: [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Viktor'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                message: state.newMessageText,
            }

            stateCopy = {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy = {
                ...state,
                newMessageText: action.newText
            };

            return stateCopy;
        }

        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}