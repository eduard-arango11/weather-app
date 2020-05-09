import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css'

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 23,
    humidity: 15,
    weatherState: 'SUNNY',
    wind: '12 m/s'
}

class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>);
    }

    render(){
        const {city} = this.props;
        return(
        <div>
            <h2 className='forecast-title'>Forecast Extended for {city}</h2>
            {this.renderForecastItemDays()}
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;