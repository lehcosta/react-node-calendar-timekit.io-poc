import * as types from './actionTypes';
import * as endpoints from './apiEndpoints';
import fetch from 'isomorphic-fetch';

export function loadEventsSuccess(events){
    return { type: types.LOAD_EVENT_SUCCESS, events: events };
}

export function loadEvents(email, password){
    return dispatch => {
        return fetch(endpoints.GET_EVENTS + `/?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(response => {
                dispatch(loadEventsSuccess(response))
            })

            .catch(error => {
                throw(error);
            });
    };
}
