import React from "react";
import PropTypes from 'prop-types';

export class Basic extends React.Component {
  static propTypes = {
    pageId: PropTypes.number,
    title: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
    timeRequired: PropTypes.number,
    xp: PropTypes.number,
    isSolved: PropTypes.bool
  };
}