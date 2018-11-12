import  { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import categoryScienceReducer from './categoryScienceReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryScience: categoryScienceReducer
});

export default rootReducer;