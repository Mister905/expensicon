import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});