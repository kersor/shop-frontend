import React from 'react'
import Product from './Product'

interface Props {
    count: number
}

const ProductList = ({
    count
}: Props) => {
  return (
    <div className="grid grid-cols-5 gap-5 mt-5">
        {[...Array(count)].map((_, i) => (
            <Product key={i} />
        ))}
    </div>
  )
}

export default ProductList