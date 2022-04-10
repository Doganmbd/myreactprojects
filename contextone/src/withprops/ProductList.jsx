import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
    </div>
  )
}

export default ProductList