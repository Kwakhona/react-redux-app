import reducers from '../reducers';

test('reducers', () => {
    let state;
    state = reducers({
        categories: {
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
                categoryScience: {},
                loading: false,
                error: null
            }
        }
    }, {
        type: 'GET_CATEGORY_SCIENCE_REQUEST',
        loading: true
    });
    expect(state).toEqual({
        categories: {
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
        categoryScience: {
            categoryScienceRequest: {
                loading: true,
                error: null
            },
            categoryScienceFailure: {
                loading: false,
                error: null
            },
            categoryScienceSuccess: {
                categoryScience: {},
                loading: false,
                error: null
            }
        }
    });
});


test('reducers', () => {
    let state;
    state = reducers({
        categories: {
            categoriesRequest: {
                loading: false,
                error: null
            },
            categoriesSuccess: {
                categories: ['explicit', 'dev', 'movie', 'food', 'celebrity', 'science', 'sport', 'political', 'religion', 'animal', 'history', 'music', 'travel', 'career', 'money', 'fashion'],
                loading: false,
                error: null
            },
            categoriesFailure: {
                loading: false,
                error: null
            }
        },
        categoryScience: {
            categoryScienceRequest: {
                loading: true,
                error: null
            },
            categoryScienceFailure: {
                loading: false,
                error: null
            },
            categoryScienceSuccess: {
                loading: false,
                categoryScience: {
                    category: ['movie'],
                    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'dol4jfp2sdmfrkx3srhrmg',
                    url: 'https://api.chucknorris.io/jokes/dol4jfp2sdmfrkx3srhrmg',
                    value: 'Teenage Mutant Ninja Turtles is based on a true story: Chuck Norris once swallowed a turtle whole, and when he crapped it out, the turtle was six feet tall and had learned karate.'
                }
            }
        }
    }, {
        type: 'GET_CATEGORY_SCIENCE_SUCCESS',
        loading: false,
        payload: {
            data: {
                category: ['political'],
                icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: 'b4e8h63nroc6xadssom7mg',
                url: 'https://api.chucknorris.io/jokes/b4e8h63nroc6xadssom7mg',
                value: 'Chuck Norris is widely predicted to be first black president. If you\'re thinking to yourself, "But Chuck Norris isn\'t black", then you are dead wrong. And stop being a racist.'
            },
            status: 200,
            statusText: '',
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            },
            config: {
                transformRequest: {},
                transformResponse: {},
                timeout: 0,
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
                maxContentLength: -1,
                headers: {
                    Accept: 'application/json, text/plain, */*'
                },
                method: 'get',
                url: 'https://api.chucknorris.io/jokes/random?category=political'
            },
            request: {}
        }
    });
    expect(state).toEqual({
        categories: {
            categoriesRequest: {
                loading: false,
                error: null
            },
            categoriesSuccess: {
                categories: ['explicit', 'dev', 'movie', 'food', 'celebrity', 'science', 'sport', 'political', 'religion', 'animal', 'history', 'music', 'travel', 'career', 'money', 'fashion'],
                loading: false,
                error: null
            },
            categoriesFailure: {
                loading: false,
                error: null
            }
        },
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
                categoryScience: {
                    category: ['political'],
                    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'b4e8h63nroc6xadssom7mg',
                    url: 'https://api.chucknorris.io/jokes/b4e8h63nroc6xadssom7mg',
                    value: 'Chuck Norris is widely predicted to be first black president. If you\'re thinking to yourself, "But Chuck Norris isn\'t black", then you are dead wrong. And stop being a racist.'
                }
            }
        }
    });
});