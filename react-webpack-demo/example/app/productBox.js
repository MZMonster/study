/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author Chester
 * @date  15/8/24
 * @description
 *
 */
import React from 'react';
import jason from '../model/dataJason.js';
import '../assets/styles/index.less';

class ProductCatRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    var style = {
      color: 'red'
    };
    var name = this.props.stocked ?
        this.props.name :
        <span style={style}>
          {this.props.name}
        </span>;
    return (
        <tr>
          <td>{name}</td>
          <td>{this.props.price}</td>
        </tr>
    );
  }
}

class ProductList extends React.Component {
  render() {
    var row = [];
    var prevCat = null;
    this.props.items.forEach(item => {
      if(item.category !== prevCat) {
        row.push(<ProductCatRow category={item.category} key={item.category} />);
      }
      row.push(<ProductRow name={item.name} price={item.price} stocked={item.stocked} key={item.name} />);
      prevCat = item.category;
    });
    return (
        <div className="productList">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {row}
            </tbody>
          </table>
        </div>
    );
  }
}

export class ProductBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataIn
    }
  }
  render() {
    return (
      <div className="productBox">
        <ProductList items={this.state.data} />
      </div>
    );
  }
}

React.render(
    <ProductBox dataIn={jason} />,
    document.getElementById("content")
);
