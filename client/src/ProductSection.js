import React, { Component } from "react";

class ProductSection extends Component {
  render() {
    const { items, type } = this.props;
    return (
      <div>
        <h2> {type.toUpperCase()} </h2>
        {items.filter(item => item.type === type).map(item => {
          return (
            <div>
              <h5> {item.name} </h5>
              <h5> {item.color} </h5>
              <h5> {item.style} </h5>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductSection;
