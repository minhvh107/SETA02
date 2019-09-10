import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppProvider, Dashboard } from '@containers';
import store from './state/store';
import { Provider } from 'react-redux';
import * as RouteConstants from '@constants/RouteConstants';
import "@node_modules/pnotify/dist/PNotifyBrightTheme.css";
import "@node_modules/animate.css/animate.css";
import "@static/styles/app.css";

ReactDOM.render(
    <Provider store={store}>
        <AppProvider>
            <BrowserRouter>
                <Switch>
                    <Route path={RouteConstants.PATH_NAME_HOME} component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </AppProvider>
    </Provider>,
    document.getElementById('root')
);
