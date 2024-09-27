import { logoutAction } from './Actions/userAction'

export const ErrorsAction = (error, dispatch, action) => {
    const message = 
    error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
    if (message === 'Not authorized, token failed') {
        // we are going to log out if token fail
        dispatch(logoutAction())
    }
    return dispatch({type: action, payload: message})
}

// api token protection
export const tokenProtection = (getState) => {
    const {
        userLogin: {userInfo},
    } = getState();
    if (!userInfo?.token) {
        return null;
    } else {
        return userInfo?.token
    }
}