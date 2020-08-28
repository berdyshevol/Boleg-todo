import React, { Component } from "react";
import "./InputItem.css";

class InputItem extends Component {
  state = {
    input: this.props.data.value,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleKeyPress = ({ key }) => {
    if (key === "Enter") {
        this.props.handleSave(this.props.data.uuid, this.state.input);
    }
    if (key === "Escape") {
      this.props.handleEdit(this.props.data.uuid, false)
    }
  };

  render() {
    const { input } = this.state
    const { data, handleEdit } = this.props
    return (
      <input
        className="input"
        type="text"
        value={input}
        name="input"
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onKeyDown={this.handleKeyPress}
        autoFocus={true}
        onBlur={() => handleEdit(data.uuid, false)}
      />
    );
  }
}

export default InputItem;
