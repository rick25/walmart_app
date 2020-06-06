import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import store from './redux/store';
import Connector from './components/Connector';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/shop" component={Connector} />
                    <Redirect to="/shop" />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
