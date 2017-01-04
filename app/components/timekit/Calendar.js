import React, {PropTypes} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// BigCalendar Setup: Config the localizer by providing the moment (or globalize) Object to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Calendar = ({timeslots, events, defaultDate, defaultView, dateFormat, onSelectEvent, onSelectSlot}) => {
    return (
        <BigCalendar
            selectable
            timeslots={timeslots}
            events={events}
            defaultView={defaultView}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            culture="en-US"
        />
    );
};

Calendar.defaultProps = {
    timeslots: 1,
    defaultView: 'week',
    dateFormat: 'Y-m-d H:i:s'
};

Calendar.propTypes = {
    timeslots: PropTypes.number,
    defaultDate: PropTypes.object,
    defaultView: PropTypes.string,
    events: PropTypes.array.isRequired,
    dateFormat: PropTypes.string,
    onSelectEvent: PropTypes.func,
    onSelectSlot: PropTypes.func
};

export default Calendar;
