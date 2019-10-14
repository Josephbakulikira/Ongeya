import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAsync, decrementAsync } from './testActions'
import { Button } from 'semantic-ui-react'
import TestPlaceInput from './TestPlaceInput'
import SimpleMap from './SimpleMap'
import { geocodeByAddress,getLatLng,} from 'react-places-autocomplete';
import {openModal} from '../Modals/ModalActions';

const mapState = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
})
const actions = {
    incrementAsync,
    decrementAsync,
    openModal
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
        const {data, incrementAsync, decrementAsync, openModal, loading, buttonName} = this.props;
        return (
            <div>
                <h1>test Component</h1>
                <h3>buduru : {data}</h3>
                <Button name='increment' loading={buttonName === 'increment' && loading} onClick={(e) => incrementAsync(e.target.name)} positive content='increment'/>
                <Button name='decrement' loading={buttonName === 'decrement' && loading} onClick={(e) => decrementAsync(e.target.name)} negative content='decrement'/>
                <Button onClick={() => openModal('TestModal', {data: 42})} color='teal' content='Open Modal'/>
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