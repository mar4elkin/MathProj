import React from "react";
import BaseBlock from "./BaseBlock";

export default class BigBlock extends BaseBlock {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.textSplit(this.props.text);

    let textBlock = (
      <div>
        <h1>{this.props.heading}</h1>
        {listItems}
      </div>
    );

    let imgBlock = (
      <img src={this.props.image} alt="" />
    );

    if (this.props.imgAliginRight === true) {
      return (
        <div className={this.props.className}>
          {textBlock}
          {imgBlock}
        </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          {imgBlock}
          {textBlock}
        </div>
      );
    }
  }
}