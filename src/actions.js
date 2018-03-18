import fetch from 'cross-fetch'

const BASE_URL = 'https://probability-theory-api.herokuapp.com';

export const SELECT_OPTION = 'SELECT_OPTION';
export const INVALIDATE_OPTION = 'INVALIDATE_OPTION';

export const REQUEST_DATA_ARRAY = 'REQUEST_DATA_ARRAY';
export const RECEIVE_DATA_ARRAY = 'RECEIVE_DATA_ARRAY';
export const SELECT_DATA_ARRAY = 'SELECT_DATA_ARRAY';
export const INVALIDATE_DATA_ARRAY = 'INVALIDATE_DATA_ARRAY';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal() {
    return {
        type: SHOW_MODAL
    }
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    }
}

export function selectOption(option) {
    return {
        type: SELECT_OPTION,
        option
    }
}

export function invalidateOption(option) {
    return {
        type: INVALIDATE_OPTION,
        option
    }
}

export function selectDataArray(dataArray) {
    return {
        type: SELECT_DATA_ARRAY,
        dataArray
    }
}

export function invalidateDataArray(dataArray) {
    return {
        type: INVALIDATE_DATA_ARRAY,
        dataArray
    }
}

function requestDataArray(dataArray) {
    return {
        type: REQUEST_DATA_ARRAY,
        dataArray
    }
}

function receiveDataArray(dataArray, json) {
    return {
        type: RECEIVE_DATA_ARRAY,
        dataArray,
        receivedObject: json,
    }
}

function fetchDataArray(dataArray) {
    return dispatch => {
        dispatch(requestDataArray(dataArray));
        return fetch(`${BASE_URL}/labWork1?inputValues=[${dataArray}]`)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveDataArray(dataArray, json))
            })
    }
}

function shouldFetchDataArray(state, dataArray) {
    const receivedDataObject = state.receivedObjectByDataArray.dataArray;
    if (!receivedDataObject) {
        return true
    } else if (receivedDataObject.isFetching) {
        return false
    } else {
        return receivedDataObject.didInvalidate
    }
}

export function fetchDataArrayIfNeeded(dataArray) {
    return (dispatch, getState) => {
        if (shouldFetchDataArray(getState(), dataArray)) {
            return dispatch(fetchDataArray(dataArray))
        }
    }
}