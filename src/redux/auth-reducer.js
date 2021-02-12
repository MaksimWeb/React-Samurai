import {authAPI, usersAPI} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        default: return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        usersAPI.getLogin()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = (email, password, rememberMe) => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}



