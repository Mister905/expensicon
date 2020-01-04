import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';
import authReducer from './authReducer';

export default combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer
});