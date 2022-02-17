import Input from "./Input";
import PropTypes from 'prop-types';

export class InputTextOver extends Input {
  
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  };  

  render() {
    return (
      <div className="input-text-over">
        <span style={{color: `${this.props.color}`}}>{this.props.text}</span>
        <Input 
          borderColor={this.props.color} 
          handler={this.props.handler}
          height={this.props.height}
        />
      </div>
    );
  }
}