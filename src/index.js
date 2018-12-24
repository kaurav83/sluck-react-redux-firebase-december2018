import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Rigister';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import firebase from './firebase';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import {setUser} from './actions';

import 'semantic-ui-css/semantic.min.css';
import Spinner from './UI/Spinner';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.setUser(user);
                this.props.history.push('/');
            }
        })
    }
    render() {
        return this.props.isLoading ? <Spinner /> : (
            
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoading: state.user.isLoading,
    }
};

const RootwithAuth = withRouter(
    connect(mapStateToProps, {setUser})(Root)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootwithAuth />
        </Router>
    </Provider>
    , document.getElementById('root')
);
//https://coursehunters.net/course/sozdayte-slack-chat-s-pomoshchyu-react-redux-i-firebase
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
