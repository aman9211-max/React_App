// shortcut imr
import React from 'react';
import Product from './Product'
//shortcut rfc
export default function ProductList(props) {
    console.log(props);
  return (
    props.productList.map((product, i) => {
        return <Product product = {product} key = {i} />
    })
  )
}
