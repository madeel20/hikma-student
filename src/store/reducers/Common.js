import Common from '../constants/Common';
const initialState = {
    countriesLoading: false,
    countries: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case Common.GET_ALL_COUNTRIES_API:
            return { ...state,
                countriesLoading: action.loading,
                countries: action.countries,
            };
        default:
            return state;
    }
};
