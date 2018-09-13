import React from "react";
import ProductSection from "./ProductSection";
export default class Wardrobe extends React.Component {
  state = {
    items: []
  };
  componentDidMount() {
    fetch("http://localhost:8080/items")
      .then(resp => resp.json())
      .then(items => {
        this.setState({
          items: items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Wardrobe</h1>
        <h2> You have {items.length} items in your closet! </h2>
        <ProductSection items={items} type="shirt" />
        <ProductSection items={items} type="pants" />
        <ProductSection items={items} type="shoe" />
      </div>
    );
  }
}
