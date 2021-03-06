import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'day-rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-shower',
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]

    const sizeIcon = "4x"

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
    else
        return <WeatherIcons className="wicon" name="day-sleet" size={sizeIcon}></WeatherIcons>;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;