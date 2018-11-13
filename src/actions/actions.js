import * as types from './ActionTypes';

export const getCategoriesRequest = () => {

    return {
        type: types.GET_CATEGORIES_REQUEST,
        loading: true
    };
};

export const getCategoriesSuccess = response => {

    return {
        type: types.GET_CATEGORIES_SUCCESS,
        loading: false,
        payload: response
    };
};

export const getCategoriesFailure = error => {
    return {
        type: types.GET_CATEGORIES_FAILURE,
        loading: false,
        payload: error
    };
};


export const getCategoryScienceRequest = () => {
    return {
        type: types.GET_CATEGORY_SCIENCE_REQUEST,
        loading: true
    };
};

export const getCategoryScienceSucess = response => {
    return {
        type: types.GET_CATEGORY_SCIENCE_SUCCESS,
        loading: false,
        payload: response
    };
};
export const getCategoryScienceFailure = error => {

    return {
        type: types.GET_CATEGORY_SCIENCE_FAILURE,
        loading: false,
        payload: error
    };
};