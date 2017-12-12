// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <h3>Has watermark: {this.props.hasWatermark}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
      </div>
    );
  };
};

Product.propTypes={
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props,PropName)=>{
    let weight = props[PropName];


    if (weight === undefined) {
      return new Error('Weight prop is undefined');
    }

    if ((weight < 80) || (weight > 300)){
      return new Error('Weight prop is out of range');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
  }
};

Product.defaultProps = {
  hasWatermark: false,
};


export default Product;
