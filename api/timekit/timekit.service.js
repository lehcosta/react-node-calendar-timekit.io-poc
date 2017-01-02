'use strict';

import timekit from 'timekit-sdk';
import moment from "moment";

const posts = [];

class TimeKitService {
    constructor() {
        //To be implemented
        this.initTimeKit();
    }

    initTimeKit() {
        console.log('--- initTimeKit ---');
        // Init timekit.io API
        // Overwrites default config with supplied object, possible keys with default values below
        timekit.configure({
            app:                        'timekitappjpc',             // app name registered with timekit (get in touch)
            apiBaseUrl:                 'https://api.timekit.io/',  // API endpoint (do not change)
            apiVersion:                 'v2',                       // version of API to call (do not change)
            inputTimestampFormat:       'Y-m-d H:i:s',               // default timestamp format that you supply
            outputTimestampFormat:      'Y-m-d H:i:s',               // default timestamp format that you want the API to return
            timezone:                   'America/Buenos_Aires',        // override user's timezone for custom formatted timestamps in another timezone
            convertResponseToCamelcase: false,                      // should keys in JSON response automatically be converted from snake_case to camelCase?
            convertRequestToSnakecase:  true                        // should keys in JSON requests automatically be converted from camelCase to snake_case?
        });
    }


    authUser(email, password, cb) {
        //Auth
        timekit.auth({
            email: email,
            password: password
        }).then(response => {
            console.log(`user ${email} authenticated successfully!`);
            return cb(null, response.data);
        }).catch(response => {
            console.log(`an error occured authenticating ${email}`);
            return cb(response.data.errors, null);
        });

    }

    getCalendars(cb){
        timekit
            .include('events') //Optional: this is to include event from each of the calendars.
            .getCalendars().then(response => {
            return cb(null, response.data);
        }).catch(response => {
            return cb(response.data.errors, null);
        })
    }

    getCalendar(id, cb){

    }

    getEvents(start, end, cb){
        timekit.getEvents({
            start: start,
            end: end
        }).then(response => {
            return cb(null, response.data);
        }).catch(response => {
            return cb(response.data.errors, null);
        });
    }

    createEvent(start, end, what, where, participants, invite, calendar_id){

        timekit.createEvent({
            start:        start,
            end:          end,
            what:         what,
            where:        where,
            participants: participants,
            invite:       invite,
            calendar_id:  calendar_id
        }).then(response => {
            console.log(response.data);
            return cb(null, response.data);
        }).catch(response => {
            console.log(response.data.errors);
            return cb(response.data.errors, null);
        });
    }

    getContacts(){
        //To be impl.
    }

    findTime(){
        //ToDo: missing impl.
        timekit.findTime({
            start:        start,
            end:          end,
            what:         what,
            where:        where,
            participants: participants,
            invite:       invite,
            calendar_id:  calendar_id
        }).then(response => {
            console.log(response.data);
            return cb(null, response.data);
        }).catch(response => {
            console.log(response.data.errors);
            return cb(response.data.errors, null);
        });
    }

    createUser(email, timezone, firstName, lastName, password){
        timekit.createUser({
            email: email,
            timezone: timezone,
            first_name: firstName,
            last_name: lastName,
            password: password
        }).then(response => {
            console.log(response.data);
            return cb(null, response.data);
        }).catch(response => {
            console.log(response.data.errors);
            return cb(response.data.errors, null);
        });

    }
}

export default new TimeKitService();

