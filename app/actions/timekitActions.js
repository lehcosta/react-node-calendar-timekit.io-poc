import * as types from './actionTypes';
import * as endpoints from './apiEndpoints';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

export function loadEventsSuccess(events){
    return { type: types.LOAD_EVENT_SUCCESS, events: events };
}

export function loadEvents(email, password){
    return dispatch => {
        return fetch(endpoints.GET_EVENTS + `/?email=${email}&password=${password}`)
            .then(response => response.json())
            .then(response => {

                response.forEach((event) => { //We loop to convert to JS Date the start and end Dates.
                    event.start = moment(event.start).toDate();
                    event.end = moment(event.end).toDate();
                });

                dispatch(loadEventsSuccess(response));
            })

            .catch(error => {
                throw(error);
            });
    };
}
