import React, { useReducer } from 'react';
import Context from './context';
import axios from 'axios';
import reducer from './reducer';
import {
    GET_ALL_AUTHORS,
    GET_FILTERED_AUTHORS,
    FILTER_AUTHORS,
    CLEAR_FILTER,
} from './types';

const AuthorsState = (props) => {
    const initialState = {
        authors: [],
        filtered: null,
        loading: true,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // Get Authors
    const getAllAuthors = async () => {
        try {
            const res = await axios.get('/api/authors/name/');

            dispatch({
                type: GET_ALL_AUTHORS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    // Get Filtered Authors directlly from backend
    const getFilteredAuthors = async (search) => {
        try {
            state.loading = false;
            const res = await axios.get(`api/authors/name/${search}`);

            dispatch({
                type: GET_FILTERED_AUTHORS,
                payload: res.data,
            });
            state.loading = true;
        } catch (err) {
            console.log(err);
        }
    };

    // Filter Authors
    const filterAuthors = async (text) => {
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
                getAllAuthors,
                getFilteredAuthors,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default AuthorsState;
