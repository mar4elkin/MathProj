import React from "react";
import PropTypes from 'prop-types';
import './Inputs.css';

export default class Basic extends React.Component {

  static propTypes = {
    textHandler: PropTypes.func,
    borderColor: PropTypes.string
  };  

  render() {
    return (
      <div className="input">
        <input style={{border: `1px solid ${this.props.borderColor}`}} />
      </div>
    );
  };
} 