import React, { useReducer } from 'react';
import Context from './context';
import axios from 'axios';
import reducer from './reducer';
import { GET_AUTHORS, FILTER_AUTHORS, CLEAR_FILTER } from './types';

const AuthorsState = (props) => {
    const initialState = {
        authors: [],
        filtered: null,
        loading: false,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // Get Authors
    const getAuthors = async () => {
        try {
            const res = await axios.get('/api/authors/name/');

            dispatch({
                type: GET_AUTHORS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    // Filter Authors
    const filterAuthors = (text) => {
        dispatch({ type: FILTER_AUTHORS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <Context.Provider
            value={{
                authors: state.authors,
                filtered: state.filtered,
                loading: state.loading,
                filterAuthors,
                clearFilter,
                getAuthors,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default AuthorsState;
