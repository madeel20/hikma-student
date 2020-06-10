import Users from "../constants/Users";
import { post, get } from '../../utils/methods';
import {
    getTokenAndSetIntoHeaders,
    removeTokenInToLocalStorageAndDeleteAuthorization,
    setTokenInToLocalStorage,
    ACCESS_TOKEN
} from "../../utils/intercepter";
import {groupBy, toast} from "../../utils/helper";
import {connectNotificationsChannel} from "./Notifications";
import {CURRENT_ENV, DOMAIN} from "../../utils/environments";

const checkKyc = (value, history) => {
    if(value === 'UNVERIFIED'){
        toast( 'info', 'Please complete your profile');
        history.replace('/my-profile')
    }
};

export const checkAuth = (token, history) => async (dispatch) => {
    dispatch({type: Users.CHECK_AUTH_API, loading: true, userLoggedIn: false});
    if(token) setTokenInToLocalStorage(token);
    let accessToken = await localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        getTokenAndSetIntoHeaders(accessToken);
        get('/api/teacher/getProfile')
            .then(({data}) => {
                dispatch(getCredentials());
                dispatch(loggedInUserUpdate(data.data));
                connectNotificationsChannel(data.data._id);
                dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: true});
                checkKyc(data.data.kyc, history);
            })
            .catch((error) => {
                dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
            });
    } else {
        dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
        logout();
    }
};

export const updateProfile = (payload) => (dispatch) => {
    dispatch({type: Users.UPDATE_USER_PROFILE_API, loading: true});
    post('/api/teacher/updateProfile', payload)
        .then(({data}) => {
            dispatch(loggedInUserUpdate(data.data));
            toast('success', 'Successfully updated your profile');
            dispatch({type: Users.UPDATE_USER_PROFILE_API, loading: false});
        })
        .catch((error) => {
            dispatch({type: Users.UPDATE_USER_PROFILE_API, loading: false});
            console.log('error', error)
        });
};
// Credentials apis
export const getCredentials = () => async (dispatch) => {
    dispatch({type: Users.GET_USER_CREDENTIALS_API, loading: true});
    get('/api/subject/getAll')
        .then(({data}) => {
            let dataGroup = groupBy(data.data, 'category');
            dispatch({type: Users.GET_USER_CREDENTIALS_API, loading: false, subjects: dataGroup});
        })
        .catch((error) => {
            dispatch({type: Users.GET_USER_CREDENTIALS_API, loading: false});
        });
};
export const updateCredentials = (payload) => (dispatch) => {
    dispatch({type: Users.UPDATE_USER_CREDENTIALS_API, loading: true});
    post('/api/teacher/updateCredentials', payload)
        .then(({data}) => {
            toast('success', 'Successfully updated your Credentials');
            dispatch({type: Users.UPDATE_USER_CREDENTIALS_API, loading: false});
        })
        .catch((error) => {
            dispatch({type: Users.UPDATE_USER_CREDENTIALS_API, loading: false});
        });
};

export const loggedInUserUpdate = (user) => (dispatch) => {
    dispatch({type: Users.SET_LOGGED_IN_USER, user: user});
};

export const logout = (action = 'logout', message = 'Successfully logout') =>  {
    // dispatch({type: Users.LOGOUT_USER_API});
    removeTokenInToLocalStorageAndDeleteAuthorization();
    let url = `${DOMAIN[CURRENT_ENV]}/login`;
    if(action) url = `${url}?action=${action}&message=${message}`;
    window.location = url;
};

export const updatePassword = (payload, CB) => (dispatch) => {
    dispatch({type: Users.UPDATE_USER_PASSWORD_API, loading: true});
    post('/api/teacher/updatePassword', payload)
        .then(({data}) => {
            toast('success', 'Successfully updated your password');
            CB && CB();
            dispatch({type: Users.UPDATE_USER_PASSWORD_API, loading: false});
        })
        .catch((error) => {
            dispatch({type: Users.UPDATE_USER_PASSWORD_API, loading: false});
            console.log('error', error)
        });
};


