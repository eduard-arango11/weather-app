import React from 'react';
import PropTypes from 'prop-types'

const ForecastItem = ({weekDay, hour}) => (
<div>{weekDay} - Hour: {hour} hs</div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;