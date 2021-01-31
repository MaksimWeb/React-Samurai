const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }

        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 3,
                message: this._state.messagesPage.newMessageText,
            }

            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }

        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
fdg
export const updateNewMessageTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;