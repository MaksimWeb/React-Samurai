import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;