import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <GridColumn width={10}>
                    <h2>Left Column</h2>
                </GridColumn>
                <GridColumn width={6}>
                    <h2>Right Column</h2>
                </GridColumn>
            </Grid>
        )
    }
}

export default EventDashboard;