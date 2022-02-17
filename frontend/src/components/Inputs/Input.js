import React from "react";
import PropTypes from 'prop-types';
import './Inputs.css';

export default class Basic extends React.Component {

  static propTypes = {
    handler: PropTypes.func,
    borderColor: PropTypes.string,
    height: PropTypes.string,
  };  

  render() {
    
    let inputStyles = {
      height: this.props.height,
      border: `1px solid ${this.props.borderColor}`
    }

    return (
      <input className="basic-input" style={inputStyles} />
    );
  };
} 