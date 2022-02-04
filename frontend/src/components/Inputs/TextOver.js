import Basic from "./Basic";

export class TextOver extends Basic {
  render() {
    return (
      <div className="input-text-over">
        <h1>123</h1>
        <Basic 
          borderColor={this.props.borderColor} 
          textHandler={this.props.textHandler}
        />
      </div>
    );
  }
}