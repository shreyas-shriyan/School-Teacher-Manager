import {
    SEARCH_RESULTS_LOADING,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
} from './actionTypes';

export const searchResultsLoading = () => ({
    type: SEARCH_RESULTS_LOADING
});

export const searchResultsSuccess = (payload) => ({
    type: SEARCH_RESULTS_SUCCESS,
    payload
});

export const searchResultsFailure = (payload) => ({
    type: SEARCH_RESULTS_FAILURE,
    payload
});

export const getTeachers = () => {

}