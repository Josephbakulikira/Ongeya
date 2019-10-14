import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActions'
import { Button } from 'semantic-ui-react'
import TestPlaceInput from './TestPlaceInput'
import SimpleMap from './SimpleMap'
import { geocodeByAddress,getLatLng,} from 'react-places-autocomplete';

const mapState = (state) => ({data: state.test.data})
const actions = {
    incrementCounter,
    decrementCounter
}
class testComponent extends Component {
    state = {
        latlng : {}
    }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              this.setState({
                  latLng: latLng
              })
          })
          .catch(error => console.error('Error', error));
      };

    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>test Component</h1>
                <h3>buduru : {data}</h3>
                <Button onClick={incrementCounter} positive content='increment'/>
                <Button onClick={decrementCounter} negative content='decrement'/>
                <br/>
                <br/>
                <br/>
                <TestPlaceInput selectAddress={this.handleSelect}/>
                
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng}/>   
            </div>
        )
    }
}
export default connect (mapState, actions)(testComponent)