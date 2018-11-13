import * as actions from '../actions/actions';
import * as types from '../actions/ActionTypes';

// eslint-disable-next-line no-undef
describe('Actions', () => {
    // eslint-disable-next-line no-undef
    it('should create an action to getCategories', () => {
        let expectedAction = {
            type: types.GET_CATEGORIES_REQUEST,
            loading: true
        };

        let res = actions.getCategoriesRequest();

        // eslint-disable-next-line no-undef
        expect(res).toEqual(expectedAction);
    });
    // eslint-disable-next-line no-undef
    it('should create an action to get Categories Success', () => {
        let expectedAction = {
            type: types.GET_CATEGORIES_SUCCESS,
            loading: false,
            payload: {}
        };

        let res = actions.getCategoriesSuccess({});

        // eslint-disable-next-line no-undef
        expect(res).toEqual(expectedAction);
    });
    // eslint-disable-next-line no-undef
    it('should create an action to get Categories Failure', () => {
        let expectedAction = {
            type: types.GET_CATEGORIES_FAILURE,
            loading: false,
            payload: {}
        };

        let res = actions.getCategoriesFailure({});

        // eslint-disable-next-line no-undef
        expect(res).toEqual(expectedAction);
    });
});