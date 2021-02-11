const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.newMessage

            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };

            return stateCopy;
        }

        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = (newMessage) => {

    return {
        type: ADD_MESSAGE,
        newMessage
    }
}
