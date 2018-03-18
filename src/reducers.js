import { combineReducers } from 'redux'
import {
    SELECT_DATA_ARRAY,
    INVALIDATE_DATA_ARRAY,
    REQUEST_DATA_ARRAY,
    RECEIVE_DATA_ARRAY,
    SELECT_OPTION,
    SHOW_MODAL,
    HIDE_MODAL
} from './actions'

function modal(state = {
    showModal: false
}, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                showModal: true
            });
        case HIDE_MODAL:
            return Object.assign({}, state, {
                showModal: false
            });
        default:
            return state
    }
}

function selectedOption(state = 'Xi Ni chart', action) {
    switch (action.type) {
        case SELECT_OPTION:
            return action.option;
        default:
            return state;
    }
}

function selectedDataArray(state = [], action) {
    switch (action.type) {
        case SELECT_DATA_ARRAY:
            return action.dataArray;
        default:
            return state;
    }
}

function receivedObject(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: {}
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_DATA_ARRAY:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_DATA_ARRAY:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_DATA_ARRAY:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.receivedObject,
            });
        default:
            return state;
    }
}

function receivedObjectByDataArray(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_DATA_ARRAY:
        case RECEIVE_DATA_ARRAY:
        case REQUEST_DATA_ARRAY:
            return Object.assign({}, state, {
                dataArray: receivedObject(state[action.dataArray], action)
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedOption,
    selectedDataArray,
    receivedObjectByDataArray,
    modal
});

export default rootReducer