import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer
})

let store = createStore(reducers);

export default store;