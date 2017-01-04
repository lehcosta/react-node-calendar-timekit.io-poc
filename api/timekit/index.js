'use strict';

import {Router} from 'express';
import controller from './timekit.controller';

var router = new Router();

router.get('/api/timekit-auth', controller.auth);
router.get('/api/timekit-calendars', controller.getCalendars);
router.get('/api/timekit-events', controller.getEvents);
router.get('/api/timekit-create-event', controller.createEvent);
router.get('/api/timekit-findtime', controller.findTime);

module.exports = router;
