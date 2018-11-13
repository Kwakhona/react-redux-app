import * as ActionTypes from '../actions/ActionTypes';
import {
    initialState
} from '../store/state';

const categoriesReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                categoriesRequest: {
                    loading: true,
                    error: null
                }
            };
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesRequest: {
                    loading: false,
                    error: null
                },
                categoriesSuccess: {
                    categories: action.payload.data,
                    loading: false,
                    error: null
                }
            };
        case ActionTypes.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                categoriesRequest: {
                    loading: false,
                    error: null
                },
                categoriesFailure: {
                    loading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};


export default categoriesReducer;