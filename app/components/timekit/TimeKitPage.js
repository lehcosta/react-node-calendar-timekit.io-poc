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

        const email = 'jcook@makingsense.com'; //ToDo: check this to use it from other place
        const password = 'jpc1988090601'; //ToDo: check this to use it from other place

        this.props.actions.loadEvents(email, password);
    }

    onSelectSlot(slotInfo){
        alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
        )
    }

    onSelectEvent(event){
        alert(event.title);
    }

    render() {
        console.log(this.props.events);
        return (
            <div>

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
    actions: PropTypes.object.isRequired
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

