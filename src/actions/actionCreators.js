import axios from 'axios';
import {
    getCategoriesRequest,
    getCategoriesSuccess,
    getCategoriesFailure,
    getCategoryScienceRequest,
    getCategoryScienceSucess,
    getCategoryScienceFailure
} from './actions';

const ROOT_URL = 'https://api.chucknorris.io/jokes';
// Action Creator to get Category Science
export const getCategories = () => {
    const request = axios.get(`${ROOT_URL}/categories`);
    return dispatch => {

        dispatch(getCategoriesRequest());

        return request.then(res => {
            dispatch(getCategoriesSuccess(res));
        }, error => {
            dispatch(getCategoriesFailure(error));
        });
    };
};


// Action Creator to get Category Science
export const getCategoryScience = category => {
    const request = axios.get(`${ROOT_URL}/random?category=${category}`);

    return dispatch => {
        dispatch(getCategoryScienceRequest());

        return request.then(res => {
            dispatch(getCategoryScienceSucess(res));
        }, error => {
            dispatch(getCategoryScienceFailure(error));
        });
    };
};
