import React from "react";
import PropTypes from 'prop-types';
import './Inputs.css';

export default class Basic extends React.Component {

  static propTypes = {
    handler: PropTypes.func,
    borderColor: PropTypes.string,
    height: PropTypes.string,
    value: PropTypes.string,
    inputType: PropTypes.string
  };  

  render() {
    
    let inputStyles = {
      height: this.props.height,
      border: `1px solid ${this.props.borderColor}`
    }

    return (
      <input 
        className="basic-input" 
        style={inputStyles} 
        onChange={this.props.handler} 
        value={this.props.value}
        type={this.props.inputType} 
      />
    );
  };
} 