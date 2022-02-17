import React from "react";
import PropTypes from 'prop-types';
import './Inputs.css';

export default class Basic extends React.Component {

  static propTypes = {
    handler: PropTypes.func,
    borderColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  };  

  render() {
    
    let inputStyles = {
      width: this.props.width,
      height: this.props.height,
      border: `1px solid ${this.props.borderColor}`
    }

    return (
      <div className="input">
        <input style={inputStyles} />
      </div>
    );
  };
} 