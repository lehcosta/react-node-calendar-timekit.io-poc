'use strict';

// SERVICES
import TimeKitService from './timekit.service';

class TimeKitController {

    auth(req, res, next) {
        const email = req.query.email;
        const password = req.query.password;

        TimeKitService.authUser(email, password, (err, authResponse) => {
            if (err) return res.status(200).json(err);

            return res.status(200).json(authResponse);
        });
    }

    getCalendars(req, res, next) {
        const email = req.query.email;
        const password = req.query.password;

        TimeKitService.authUser(email, password, (err, authResponse) => {
            if (err) return res.status(401).json(err);

            TimeKitService.getCalendars((err, calendars) => {
                if (err) return res.status(200).json(err);

                res.status(200).json(calendars);
            });
        });
    }

    getEvents(req, res, next){
        const email = req.query.email;
        const password = req.query.password;
        const start = '2016-12-26 08:00:00'; //ToDo: move to a param
        const end = '2016-12-28 18:00:00'; //ToDo: move to a param


        const eventsHardcoded = [ //ToDo: remove it from here
            {
                'title': 'All Day Event',
                'allDay': true,
                'start': new Date(2015, 3, 0),
                'end': new Date(2015, 3, 0)
            },
            {
                'title': 'Long Event',
                'start': new Date(2015, 3, 7),
                'end': new Date(2015, 3, 10)
            },

            {
                'title': 'TEST EVENT',
                'start': new Date(2017, 0, 2, 18, 0, 0),
                'end': new Date(2017, 0, 2, 19, 0, 0)
            }
        ];

        TimeKitService.authUser(email, password, (err, authResponse) => {
            if (err) return res.status(200).json(err);

            TimeKitService.getEvents(start, end, (err, events) => {
                if (err) return res.status(200).json(err);

                events.forEach((event, key) => {
                    event.title = event.what;
                    // console.log(event);
                });


                return res.status(200).json(eventsHardcoded);
                // return res.status(200).json(events);
            });
        });
    }

    createEvent(req, res, next){
        const email = req.query.email;
        const password = req.query.password;
        const start = '2016-12-28 15:00:00'; //ToDo: move to a param
        const end = '2016-12-28 16:00:00'; //ToDo: move to a param
        const what = 'Stand Up meeting';
        const where = 'Starbucks Coffee';
        const participants = ['juampick@gmail.com'];
        const invite = true;
        const calendarId = '1e672fe1-6ba0-4501-b43d-768e2107ceee';

        TimeKitService.authUser(email, password, (err, authResponse) => {
            if (err) return res.status(200).json(err);

            TimeKitService.createEvent(start, end, what, where, participants, invite, calendarId, (err, eventInfo) => {
                if (err) return res.status(200).json(err);

                return res.status(200).json(eventInfo);
            });
        });
    }

    findTime(req, res, next){
        res.status(200).json({message: 'findTime to be implemented'});
    }

}

export default new TimeKitController();
