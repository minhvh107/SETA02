import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import DashboardReducer from './dashboard';
import ContentsReducer from './contents';

const appReducer = combineReducers({
    DashboardReducer,
    ContentsReducer,
    form: FormReducer,
});

export default appReducer;