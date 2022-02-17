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
        1
      </div>
    )
  }
}