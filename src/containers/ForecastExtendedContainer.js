import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city ?
            <ForecastExtended city={this.props.city}></ForecastExtended> :
            <h1>There isn't selected city</h1>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps,null)(ForecastExtendedContainer);