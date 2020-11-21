import {
    SEARCH_RESULTS_LOADING,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE
} from './actionTypes';

const initialState = {
    searchResultsLoading: false,
    searchResultsError: '',
    searchResults: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS_LOADING:
            return { ...state, searchResultsLoading: true };
        case SEARCH_RESULTS_FAILURE:
            return {
                ...state,
                searchResultsLoading: false,
                searchResultsError: action.payload
            };
        case SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                searchResultsLoading: false,
                searchResults: action.payload,
                searchResultsError: ''
            }
        default:
            return state;
    }
}