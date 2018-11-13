
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as types from '../actions/ActionTypes';
import * as actionCreators from '../actions/actionCreators';

const middlewares = [thunk];
let mockStore = configureMockStore(middlewares);

describe('action Creators', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios, { delayResponse: 2000 });
        mockStore = configureMockStore(middlewares);
    });

    it('should make request for categories', async () => {

        mock.onGet('https://api.chucknorris.io/joke/categories').reply(200, {
            data: ["explicit","dev"]
        });

        const expectedActions = [
            { type: types.GET_CATEGORIES_REQUEST, loading: true },
            { type: types.GET_CATEGORIES_SUCCESS, loading: false, payload: { data: ["explicit","dev"] } }
          ]

        const store = mockStore({ categories: {
            categoriesRequest: {
              loading: false,
              error: null
            },
            categoriesSuccess: {
              categories: [
                'explicit',
                'dev',
                'movie',
                'food',
                'celebrity',
                'science',
                'sport',
                'political',
                'religion',
                'animal',
                'history',
                'music',
                'travel',
                'career',
                'money',
                'fashion'
              ],
              loading: false,
              error: null
            },
            categoriesFailure: {
              loading: false,
              error: null
            }
          },
        });

        store.dispatch(actionCreators.getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });
    it('should make request for categories', async () => {

        mock.onGet('https://api.chucknorris.io/jokes/categories').reply(500, {
            error: {message: 'error'}
        });

        const expectedActions = [
            { type: types.GET_CATEGORIES_REQUEST, loading: true },
            { type: types.GET_CATEGORIES_FAILURE, loading: false, payload: { message: "error" } }
          ]

        const store = mockStore({ categories: {
            categoriesRequest: {
              loading: false,
              error: null
            },
            categoriesSuccess: {
              categories: [],
              loading: false,
              error: null
            },
            categoriesFailure: {
              loading: false,
              error: null
            }
          },
        });

        store.dispatch(actionCreators.getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });

    it('should make request for category info', async () => {
        let data = {"category":null,"icon_url":"https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png","id":"eBXXufmITMeSaV74Zi_eDA","url":"https:\/\/api.chucknorris.io\/jokes\/eBXXufmITMeSaV74Zi_eDA","value":"Chuck Norris whisper bloody murder."};
        mock.onGet('https://api.chucknorris.io/jokes/random?category=science').reply(200, {
            data: data
        });

        const expectedActions = [
            { type: types.GET_CATEGORY_SCIENCE_REQUEST, loading: true },
            { type: types.GET_CATEGORY_SCIENCE_SUCCESS, loading: false, payload: { data: data } }
          ]

        const store = mockStore({
            categoryScience: {
                categoryScienceRequest: {
                  loading: false,
                  error: null
                },
                categoryScienceFailure: {
                  loading: false,
                  error: null
                },
                categoryScienceSuccess: {
                  loading: false,
                  categoryScience: { }
                }
            }
        });


        store.dispatch(actionCreators.getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });

    it('should make request and rcieve an error action dispatched', async () => {
        mock.onGet('https://api.chucknorris.io/jokes/random?category=science').reply(200, {
               error: {message: 'error'}
            });

            const expectedActions = [
                { type: types.GET_CATEGORY_SCIENCE_REQUEST, loading: true },
                { type: types.GET_CATEGORY_SCIENCE_FAILURE, loading: false, payload: { error:{message: 'error'} } }
              ]

        const store = mockStore({
            categoryScience: {
                categoryScienceRequest: {
                  loading: false,
                  error: null
                },
                categoryScienceFailure: {
                  loading: false,
                  error: null
                },
                categoryScienceSuccess: {
                  loading: false,
                  categoryScience: { }
                }
            }
        });


        store.dispatch(actionCreators.getCategories()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });

    });



    afterEach(() => {
        mock.restore()
    });
});