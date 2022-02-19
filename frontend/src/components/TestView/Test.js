import React from "react";
import PropTypes from 'prop-types';
import './Test.css';

export class Test extends React.Component {
  static propTypes = {
    pageId: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    timeRequired: PropTypes.number,
    xp: PropTypes.number,
    isSolved: PropTypes.bool
  };

  render() {
    return (
      <div className="test-view">
        <h3 className="test-view-title" >{this.props.title} {this.props.level}</h3>
        <p>{this.props.description}</p>
        <div className="test-view-foother">
          <div>
            {this.props.timeRequired} {this.props.xp}
          </div>
          <div> 
            {this.props.isSolved.toString()}
          </div>
        </div>
      </div>
    )
  }
}