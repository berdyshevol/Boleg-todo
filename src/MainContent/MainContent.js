import React, { Component } from "react";
import uuid from "react-uuid";
import List from "../List/List";
import "./MainContent.css";

class MainContent extends Component {
  state = {
    inputValue: "",
    values: [],
  };

  handlePress = ({ key }) => {
    if (key === "Enter") {
      if (this.state.inputValue ==='') return
      this.setState((prevState) => (
        {
        ...prevState,
        values: [
          ...prevState.values,
          {
            uuid: uuid(),
            value: prevState.inputValue,
            date: new Date(),
            isEdit: false,
          },
        ],
        inputValue: "",
      }));
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      this.setState({ inputValue: "" });
    }
  };

  handleDelete = (uuid) => {
    this.setState((prevState) => ({
      ...prevState,
      values: prevState.values.filter((v) => v.uuid !== uuid),
    }));
  };

  handleSave = (uuid, value) => {
    if (value === '') return
    this.setState((prevState) => ({
      ...prevState,
      values: prevState.values.map((item) => {
        if (item.uuid !== uuid) {
          return item;
        }
        return {
          ...item,
          value,
          date: new Date(),
          isEdit: false,
        };
      }),
    }));
  };

  handleEdit = (uuid, isEdit) => {
    this.setState((prevState) => ({
      ...prevState,
      values: prevState.values.map((item) => {
        if (item.uuid !== uuid) {
          return item;
        }
        return {
          ...item,
          isEdit,
        };
      }),
    }));
  }

  render() {
    const { inputValue, values } = this.state;
    return (
      <div className="todo-list">
        <input
          className="main-input"
          type="text"
          name="inputValue"
          value={inputValue}
          onKeyPress={this.handlePress}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
        <List
          values={values}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default MainContent;
