import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timekitActions from '../../actions/timekitActions';
import Calendar from './Calendar';

class TimeKitPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onSelectSlot = this.onSelectSlot.bind(this);
        this.onSelectEvent = this.onSelectEvent.bind(this);
        this.refreshEvents = this.refreshEvents.bind(this);

        //ToDo: these params will come from the logged user maybe
        const email = '';
        const password = '';

        this.props.actions.loadEvents(email, password);
    }

    onSelectSlot(slotInfo){
        //ToDo: create event modal
        alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
        );
    }

    onSelectEvent(event){
        //ToDo: event info modal
        alert(event.title);
    }

    refreshEvents(){
        //ToDo: these params will come from the logged user maybe
        const email = '';
        const password = '';

        this.props.actions.loadEvents(email, password);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.refreshEvents}><i className="glyphicon glyphicon-refresh" /> Events</button>
                <hr />
                <Calendar
                    timeslots={2}
                    events={this.props.events}
                    onSelectSlot={this.onSelectSlot}
                    onSelectEvent={this.onSelectEvent}
                />
            </div>
        );
    }
}

TimeKitPage.propTypes = {
    actions: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired
};

function mapStatesToProps(state, ownProps) {
    return {
        state: state,
        events: state.timekitData.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timekitActions, dispatch)
    };
}

export default connect(mapStatesToProps, mapDispatchToProps)(TimeKitPage);

