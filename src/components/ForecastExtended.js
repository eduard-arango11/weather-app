import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'


const url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = '82a4b5915dec0a2c66e26bdcb9af7faf';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData : null}
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => data.json()
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }
    
    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => 
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}></ForecastItem>
        );
    }

    renderProgress(){
        return <h3>Loading Forecast Extended...</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
        <div>
            <h2 className='forecast-title'>Forecast Extended for {city}</h2>
            { forecastData ?
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()
            }
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;