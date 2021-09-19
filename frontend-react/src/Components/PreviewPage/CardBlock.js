import React from "react";
import BaseBlock from "./BaseBlock";

export default class CardBlock extends BaseBlock {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.textSplit(this.props.text);

    return (
      <div className={this.props.className}>
        <img src={this.props.image} alt="" />
        <h2>{this.props.heading}</h2>
        <p>{listItems}</p>
      </div>
    );
  }
}