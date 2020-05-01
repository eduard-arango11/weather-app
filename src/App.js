import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Cali,col',
  'Barcelona,es',
  'Miami,us',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  
  render(){
    return (
      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities={cities} 
            onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
