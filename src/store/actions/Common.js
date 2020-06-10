import Common from "../constants/Common";
import { get } from '../../utils/methods';

// Countries api
export const getCountries = () => async (dispatch) => {
    dispatch({type: Common.GET_ALL_COUNTRIES_API, loading: true});
    get('https://restcountries.eu/rest/v2/all')
        .then(({data}) => {
            dispatch({type: Common.GET_ALL_COUNTRIES_API, loading: false, countries: data});
        })
        .catch((error) => {
            dispatch({type: Common.GET_ALL_COUNTRIES_API, loading: false});
        });
};
