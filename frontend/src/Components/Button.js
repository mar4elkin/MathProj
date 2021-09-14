import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
}

export class SubmitAuthButton extends Button {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="auth-input">
        <button
          className="auth-submit-button"
          style={{width: this.props.width}}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}