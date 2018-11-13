export const initialState = {
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
};