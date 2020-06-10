import Users from '../constants/Users';

const initialState = {
    loading: false,
    updateLoading: false,
    loginLoading: false,
    user: {},
    checkAuthLoading: false,
    userLoggedIn: false,
    updateProfileLoading: false,
    updateCredentialsLoading: false,
    updatePasswordLoading: false,
    subjects: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case Users.CHECK_AUTH_API:
            return {...state, checkAuthLoading: action.loading, userLoggedIn: action.userLoggedIn};

        case Users.LOGIN_USER_API:
            return {...state, loginLoading: action.loading, userLoggedIn: action.userLoggedIn};

        case Users.LOGOUT_USER_API:
            return {...state, userLoggedIn: false, user: {}};

        case Users.SET_LOGGED_IN_USER:
            return {...state, user: action.user};

        case Users.UPDATE_LOGGED_IN_USER:
            return {...state, user: action.user};

        case Users.UPDATE_USER_PROFILE_API:
            return {...state, updateProfileLoading: action.loading};

        case Users.UPDATE_USER_PASSWORD_API:
            return {...state, updatePasswordLoading: action.loading};

        case Users.UPDATE_USER_CREDENTIALS_API:
            return {...state, updateCredentialsLoading: action.loading};

        case Users.GET_USER_CREDENTIALS_API:
            return {...state, subjects: action.subjects};

        default:
            return state;
    }
};
