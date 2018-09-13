import React from "react";
import { promises } from "fs";

export default class Wardrobe extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    const name = e.target.nameInput.value,
      color = e.target.colorInput.value,
      image = e.target.imageInput.value,
      type = e.target.typeInput.value,
      style = e.target.styleInput.value;
    const newItem = {
      name: name,
      color: color,
      img: image,
      type: type,
      style: style
    };
    fetch("http://localhost:8080/items", {
      method: "post",
      body: JSON.stringify(newItem),
      headers: {
        "Content Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(result => {
        window.location.pathname = "/";
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h1> add item </h1>
        <form onSubmit={this.submitHandler}>
          <label>
            {"name"}

            <input type="text" name="nameInput" />
          </label>
          <label>
            {"color "}

            <input type="text" name="colorInput" />
          </label>
          <label>
            {"img "}

            <input type="text" name="imgInput" />
          </label>
          <label>
            Type:
            <select name="typeInput">
              <option value="shirt"> shirt </option>
              <option value="pants"> pants </option>
              <option value="shoes"> shoes </option>
            </select>
          </label>
          <label>
            Style:
            <select name="typeInput">
              <option value="casual"> casual </option>
              <option value="buisness"> buisness </option>
              <option value="formal"> formal </option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
