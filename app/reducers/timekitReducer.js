import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const timekitData = (state = initialState, action) => {
    switch (action.type){
        case types.LOAD_EVENT_SUCCESS:
            return Object.assign({}, state,
                {
                    events: action.events,
                }
            );

        default:
            return state;
    }
};
