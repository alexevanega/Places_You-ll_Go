import React, { Component } from 'react'

export default class Map extends Component {

    listOfStates(states) {
        return states.map(state => <li class="list-group-item list-group-item-action list-group-item-info">{state}</li>)
    }

    render() {
        return (
            <div>
                <ol class="list-group list-group-numbered">
                    {this.listOfStates(this.props.states)}
                </ol>
            </div>
        )
    }
}
