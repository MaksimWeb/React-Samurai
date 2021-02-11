import * as axios from "axios";
import {ProfileAPI, usersAPI} from "../Api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u', likesCount: 12},
        {id: 2, message: 'My post', likesCount: 11},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostBody,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = (newPostBody) => {

    return {
        type: ADD_POST,
        newPostBody
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => dispatch(setStatus(response.data)))
    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {

        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            });
    }
}