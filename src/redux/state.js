import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u', likesCount: 12},
                {id: 2, message: 'My post', likesCount: 11},
            ],
            newPostText: 'Max'
        },
        messagesPage: {
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
    },
    _callSubscriber() {
        console.log('changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

    }
}

export default store;