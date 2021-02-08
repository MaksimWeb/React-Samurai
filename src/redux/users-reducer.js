import {usersAPI} from "../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
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
                users: state.users.map(u => {
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
                ...state, users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }

        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }


        default:
            return state;
    }
}

export default usersReducer;

export const followSuccess = (userID) => {

    return {
        type: FOLLOW,
        userID
    }
}

export const unFollowSuccess = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            });
    }
}

export const getPageThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));

        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });
    }
}