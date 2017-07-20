import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store'
import { Provider } from 'react-redux';
import TodoCon from './container/signup'
import registerServiceWorker from './registerServiceWorker';
import {
    browserHistory, Router, Route, 
} from 'react-router';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router history={browserHistory}>
                        <Route path="/" component={TodoCon}></Route>
                    </Router>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
