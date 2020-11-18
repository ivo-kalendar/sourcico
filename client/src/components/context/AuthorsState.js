import React, { useReducer } from 'react';
import Context from './context';
import axios from 'axios';
import reducer from './reducer';
import {
    LOAD_BETWEEN_GET,
    GET_FILTERED_AUTHORS,
    GET_AUTHORS_BY_ID,
} from './types';

const AuthorsState = (props) => {
    const initialState = {
        authorId: [],
        loading: true,
        authors: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    // Set Loading to true between get methods
    const loadBetweenGet = () => {
        dispatch({ type: LOAD_BETWEEN_GET });
    };

    // Get Filtered Authors directlly from backend
    const getFilteredAuthors = async (search) => {
        try {
            const res = await axios.get(`api/authors/name/${search}`);

            dispatch({
                type: GET_FILTERED_AUTHORS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getAuthorsById = async (id) => {
        try {
            const res = await axios.get(`api/authors/id/${id}`);

            dispatch({
                type: GET_AUTHORS_BY_ID,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Context.Provider
            value={{
                authorId: state.authorId,
                loading: state.loading,
                authors: state.authors,
                getFilteredAuthors,
                getAuthorsById,
                loadBetweenGet,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default AuthorsState;
