import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth-input">
        <p>{this.props.title}</p>
        <input type="text" id={this.props.id} />
      </div>
    );
  }

}