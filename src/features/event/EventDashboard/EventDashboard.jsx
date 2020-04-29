import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
    state = {
        events: eventsFromDashboard,
        isOpen: false,
        selectedEvent: null
    };

    // handleIsOpenToggle = () => {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen
    //     }))
    // };

    handleCreateFormOpen =() => {
      this.setState({
        isOpen: true,
        selectedEvent: null
      })
    }

    handeFormCancel =() => {

      this.setState({
        isOpen: false,
       
      })
    }
    handleCreateEvent = newEvent => {
      newEvent.id = cuid();
      newEvent.hostPhotoURL = '/assets/user.png';
      
      this.setState(({events}) => ({
        events:[...events, newEvent],
        isOpen: false
    }))
  }

  handleSelectEvent = (event) =>{
    this.setState({
      selectedEvent: event,
      isOpen: true
    })
  }

    render() {
        const {events, isOpen, selectedEvent } = this.state;
        return (
            <Grid>
                <GridColumn width={10}>
                    <EventList events={events} selectedEvent={this.handleSelectEvent} />
                </GridColumn>
                <GridColumn width={6}>
                    <Button 
                      onClick ={this.handleCreateFormOpen} 
                      positive 
                      content='Create Event'/>
                    {isOpen && 
                      <EventForm
                      selectedEvent={selectedEvent}
                      //Add new forms created by the create form
                      createEvent={this.handleCreateEvent}
                      cancelFormOpen={this.handleFormCancel}
                      />
                    }
                    
                </GridColumn>
            </Grid>
        );
    }
}

export default EventDashboard;