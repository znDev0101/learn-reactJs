import React, { Component, Fragment } from 'react';
import ImgProduct from '../../../Assets/myprofile.jpg';
import './CardProduct.css';

class CardProduct extends Component {
  state = {
    order: 0,
  };

  handleMinus = () => {
    this.setState({
      order: this.state.order - 1,
    });
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="card-content">
          <div className="img-product">
            <img src={ImgProduct} alt="myprofile" />
          </div>
          <div className="product-count">
            <button onClick={this.handleMinus}>-</button>
            <div className="barang">{this.state.order}</div>
            <button onClick={this.handlePlus}>+</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardProduct;
