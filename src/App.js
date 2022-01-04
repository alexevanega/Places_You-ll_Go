import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import WWD from './views/WWD';
import Map from './views/Map';

export default class App extends Component {

  constructor() {
    super();
    this.state = {states: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Conneticut','Delaware','Florida',
  'Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
'South Dakota','Tennessee','Texas','Utah','Virginia','Vermont','Washington','West Virginia','Wisconsin','Wyoming']
  }  

}


  render() {
    return (
      <div>
        <Navbar />
        <h1>Oh, The Places You'll Go!</h1>
        <Routes>
          <Route path='/WWD' element={<WWD />}/>
          <Route path='/Map' element={<Map states={this.state.states}/>}/>
        </Routes>
      </div>
    )
  }
}

