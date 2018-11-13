import * as ActionTypes from '../actions/ActionTypes';
import {
    initialState
} from '../store/state';

const categoryScienceReducer = (state = initialState.categoryScience, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORY_SCIENCE_REQUEST:
            return {
                ...state,
                categoryScienceRequest: {
                    loading: true,
                    error: null
                }
            };
        case ActionTypes.GET_CATEGORY_SCIENCE_SUCCESS:
            return {
                ...state,
                categoryScienceRequest: {
                    loading: false,
                    error: null
                },
                categoryScienceSuccess: {
                    loading: false,
                    categoryScience: action.payload.data
                }
            };

        case ActionTypes.GET_CATEGORY_SCIENCE_FAILURE:
            return {
                ...state,
                categoryScienceRequest: {
                    loading: false,
                    error: null
                },
                categoryScienceFailure: {
                    loading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};

export default categoryScienceReducer;