import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActions'
import { Button } from 'semantic-ui-react'

const mapState = (state) => ({data: state.test.data})
const actions = {
    incrementCounter,
    decrementCounter
}
class testComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>test Component</h1>
                <h3>buduru : {data}</h3>
                <Button onClick={incrementCounter} positive content='increment'/>
                <Button onClick={decrementCounter} negative content='decrement'/>
            </div>
        )
    }
}
export default connect (mapState, actions)(testComponent)