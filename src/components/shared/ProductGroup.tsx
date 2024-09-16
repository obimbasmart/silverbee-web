import React from 'react'
import ProductItem from './ProductItem'
import { ProductItemProps } from './ProductItem'

interface ProductGroupProps {
  data: ProductItemProps[]
}

function ProductGroup({data}: ProductGroupProps) {
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {
                data.map((item) => (
                    <ProductItem 
                        key={item.name}
                        name={item.name}
                        img={item.image}
                        discount={item.discount}
                        price={item.price}
                    />
                ))
            }
    </section>
  )
}

export default ProductGroup