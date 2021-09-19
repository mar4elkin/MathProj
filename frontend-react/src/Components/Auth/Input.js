import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
    this.props.handler(this.props.sname, event.target.value)
  }

  render() {
    if (this.props.type === '') {
      this.props.type = 'text'
    }
    return (
      <div className="auth-input">
        <p>{this.props.title}</p>
        <input
          type={this.props.type}
          value={this.state.inputValue}
          onChange={this.handleChange}

        />
      </div>
    );
  }

}