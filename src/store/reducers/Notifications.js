import Notifications from '../constants/Notifications';
import { notifications } from '../../pages/dashboard/data';

const initialState = {
    notifications: notifications,
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case Notifications.GET_NOTIFICATIONS_API:
            return {...state, loading: action.loading};

        default:
            return state;
    }
};
