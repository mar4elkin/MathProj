import React from "react";
import PropTypes from 'prop-types';
import './HtmlBlockWrapper.css';

export default class HtmlBlockWrapper extends React.Component {

  static propTypes = {
    containerClass: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }; 

  render() {
    let className = `${this.props.containerClass}-container html-block-wrapper`
    return (
      <div className={className}>
        <div className="block-description">
          <h3>{this.props.title}</h3>
          <h4>{this.props.description}</h4>
        </div>
        <div className="block-tests">
          {this.props.children}
        </div>
      </div>
    )
  }
}