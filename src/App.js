import React from 'react';
import { withRouter } from "react-router-dom";
import { Root } from "./routing";
import {connect} from "react-redux";
import {checkAuth} from "./store/actions/Users";
import {Loading} from "./uiComponents";
import {getCountries} from "./store/actions/Common";

class App extends React.Component {

    checkTokenInParamAndSet = () => {
        const { history, checkAuth } = this.props;
        let obj = {};
        let search = (window.location && window.location.search) ? window.location.search.substring(1) : '';
        if (search) {
            obj = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) })
        }
        if (obj.token) {
            checkAuth(obj.token, history);
            window.history.replaceState('', '', window.location.href.split("?")[0]);
        } else {
            checkAuth(null, history)
        }
    };

    UNSAFE_componentWillMount () {
        this.checkTokenInParamAndSet();
        this.props.getCountries()

    }

    render() {
        const {loading} = this.props;
        return (
            <div className="app-root">
                {loading ? <Loading/> : null}
                <Root {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {
        loading: users.checkAuthLoading
    }
};
const mapDispatchToProps = {
    checkAuth,
    getCountries
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
