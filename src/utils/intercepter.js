import axios from "axios";
import {API_URL, CURRENT_ENV} from "./environments";
import {logout} from "../store/actions/Users";
import {toast} from "./helper";

let baseUrl = API_URL[CURRENT_ENV];

const interceptor = () => {

    axios.defaults.baseURL = baseUrl;

    getTokenAndSetIntoHeaders();

    axios.interceptors.request.use(
        function (config) {
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.log('error.response', error.response)
            if(error.response && error.response && error.response.status === 401){
                logout('logout', 'Session expired')
            } else if(error.response && error.response && error.response.status !== 200){
                console.log('error.response', error.response)
                let {data} = error.response;
                let errorMessage = data && data.message ? data.message : '';
                toast('error', errorMessage);
            }
            return Promise.reject(error.response);
        }
    )

};

//token key name into localStorage
export const ACCESS_TOKEN = 'ACCESS_TOKEN';

// get token into local storage and set into headers function
export const getTokenAndSetIntoHeaders = async (token) => {
    if(token){
        axios.defaults.headers.common['authorization'] = `${token}`;
    } else {
        let accessToken = await localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            axios.defaults.headers.common['authorization'] = `${accessToken}`;
        }
    }
};

//set token into local storage
export const setTokenInToLocalStorage = async (value) => {
    try {
        await localStorage.setItem(ACCESS_TOKEN, value);
    } catch (error) {
        // alertError(JSON.stringify(error))
    }
};

//set token into local storage
export const removeTokenInToLocalStorageAndDeleteAuthorization = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    delete axios.defaults.headers.common['authorization'];
};

export {
    baseUrl,
    interceptor
}
