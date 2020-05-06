import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

 class EventList extends Component {
    render() {
        const{events, selectedEvent } = this.props;
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <EventListItem key={event.id} event={event} selectedEvent={selectedEvent} />
                ))}
                       
                
            </Fragment>
        )
    }
}

export default EventList; 
