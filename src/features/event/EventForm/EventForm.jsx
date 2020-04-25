import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

 class  EventForm  extends Component {
  //Controlled forms update
  state = {
    title: '',
    date: '',
    city:'',
    venue:'',
    hostedBy:''
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    //Access refs - But you can use hooks too
    //Here I write "test" on Create Event - Event Tile - Submit ->Console-"test"
    //console.log(this.state);
    this.props.createEvent(this.state);
  };

  //evt is an internal event that gets the value from what is inside the  input value field
//and we will use it to set our state
  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value 
    })
  };

    render() {
      const{ cancelFormOpen } = this.props;
      //Controlled form update
      const{ title, date, city, venue, hostedBy } = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete='on' > 
                      <Form.Field>
                        <label>Event Title</label>
                        <input
                          name='title'
                          onChange={this.handleInputChange}
                          value={title} 
                          placeholder="Even Title" />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input 
                          name='date'
                          onChange={this.handleInputChange}
                          value={date} 
                          type="date" 
                          placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input 
                          name='city'
                          onChange={this.handleInputChange}
                          value={city} 
                          placeholder="City event is taking place" 
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                          name='venue'
                          onChange={this.handleInputChange}
                          value={venue} 
                          placeholder="Enter the Venue of the event" 
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                          name='hostedBy'
                          onChange={this.handleInputChange}
                          value={hostedBy}  
                          placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button> 
                      <Button type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm;