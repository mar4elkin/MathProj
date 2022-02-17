import Basic from "./Basic";
import PropTypes from 'prop-types';

export class TextOver extends Basic {
  
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };  

  render() {
    return (
      <div className="input-text-over">
        <span style={{color: `${this.props.color}`}}>{this.props.text}</span>
        <Basic 
          borderColor={this.props.color} 
          handler={this.props.handler}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }
}