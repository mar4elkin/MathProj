import React from "react";
import PropTypes from 'prop-types';

import './Button.css';

export class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    borderColor: PropTypes.string,
    handler: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
  }; 

  render() {

    let styles = {
      backgroundColor: this.props.color,
      width: this.props.width,
      height: this.props.height
    }

    return (
      <button className="basic-button" style={styles} >
        {this.props.title}
      </button>
    )
  }
}