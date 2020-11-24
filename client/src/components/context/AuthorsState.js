import React, { useReducer } from 'react';
import Context from './context';
import axios from 'axios';
import reducer from './reducer';
import {
    LOAD_BETWEEN_GET,
    GET_FILTERED_AUTHORS,
    GET_AUTHORS_BY_ID,
    GET_FILTERED_TITLES,
    GET_FILTERED_SERIES,
} from './types';

const AuthorsState = (props) => {
    const initialState = {
        loading: true,
        authorId: [],
        authors: [],
        books: [],
        seriesObj: [],
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
            const res = await axios.get(`api/authors/id/${id.toString()}`);

            dispatch({
                type: GET_AUTHORS_BY_ID,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    // Get Filtered Books directlly from backend
    const getFilteredTitles = async (search) => {
        try {
            const res = await axios.get(`api/books/title/${search}`);

            dispatch({
                type: GET_FILTERED_TITLES,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    // Get Filtered Series directlly from backend
    const getFilteredSeries = async (search) => {
        try {
            const res = await axios.get(`api/books/series/${search}`);

            dispatch({
                type: GET_FILTERED_SERIES,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Context.Provider
            value={{
                loading: state.loading,
                authorId: state.authorId,
                authors: state.authors,
                books: state.books,
                seriesObj: state.seriesObj,
                getFilteredAuthors,
                getAuthorsById,
                getFilteredTitles,
                getFilteredSeries,
                loadBetweenGet,
            }}>
            {props.children}
        </Context.Provider>
    );
};

export default AuthorsState;
