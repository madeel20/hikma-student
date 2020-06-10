import Dashboard from '../constants/Dashboard';
import { lessons, events } from '../../pages/dashboard/data';

const initialState = {
    lessons: lessons,
    events: events,
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case Dashboard.CHECK_AUTH_API:
            return {...state, loading: action.loading};

        case Dashboard.LOGIN_USER_API:
            return {...state, loading: action.loading};

        default:
            return state;
    }
};
