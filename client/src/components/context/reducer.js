import {
    LOAD_BETWEEN_GET,
    GET_FILTERED_AUTHORS,
    GET_AUTHORS_BY_ID,
    GET_FILTERED_TITLES,
} from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_AUTHORS_BY_ID: {
            return {
                ...state,
                loading: false,
                authorId: action.payload,
            };
        }
        case GET_FILTERED_AUTHORS: {
            return {
                ...state,
                loading: false,
                authors: action.payload,
            };
        }
        case GET_FILTERED_TITLES: {
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        }
        case LOAD_BETWEEN_GET: {
            return {
                ...state,
                loading: true,
            };
        }
        default:
            return state;
    }
};
