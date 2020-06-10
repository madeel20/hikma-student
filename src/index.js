import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {interceptor} from "./utils/intercepter";
import {Provider} from "react-redux";
//global add here
import 'antd/dist/antd.css';
import './assets/icon/icons.css';
import './assets/scss/index.scss';
import * as serviceWorker from './serviceWorker';
import {store} from "./store";
import {connectionSocket} from "./utils/socket";
import {BrowserRouter} from "react-router-dom";

//call axios interceptor
interceptor();

function Root() {
    useEffect(()=> {
        connectionSocket()
    }, [])
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
