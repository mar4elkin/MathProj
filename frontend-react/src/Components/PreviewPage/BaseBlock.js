import React from "react";

export default class BaseBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  textSplit(str) {
    return str.split('.').map((text) =>
      <p>{text}</p>
    );
  }

}