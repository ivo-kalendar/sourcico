import { GET_AUTHORS, FILTER_AUTHORS, CLEAR_FILTER } from './types';

export default (state, action) => {
    switch (action.type) {
        case GET_AUTHORS: {
            return {
                ...state,
                authors: action.payload,
                loading: false,
            };
        }
        case FILTER_AUTHORS: {
            return {
                ...state,
                filtered: state.authors.filter((author) => {
                    const regExp = new RegExp(`${action.payload}`, 'gi');
                    return author.name.match(regExp);
                }),
            };
        }
        case CLEAR_FILTER: {
            return {
                ...state,
                filtered: null,
            };
        }
        default:
            return state;
    }
};
