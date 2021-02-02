const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, fullName: 'Maksim', followed: false, status: 'Bitch, ima boss', location: {city: 'Khabarovsk', country: 'Russia'} },
        {id: 2, fullName: 'Viktor', followed: true, status: 'Need a doctor', location: {city: 'Moscow', country: 'Russia'} },
        {id: 3, fullName: 'Oleksandr', followed: false ,status: 'My first job!', location: {city: 'Kiev', country: 'Ukraine'} },
    ],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default: return state;
    }
}

export default usersReducer;

export const followAC = (userID) => {

    return {
        type: FOLLOW,
        userID
    }
}

export const unFollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}