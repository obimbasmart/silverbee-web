import React from 'react'
import ProductItem from './ProductItem'
import { ProductItemProps } from './ProductItem'

interface ProductGroupProps {
  data: ProductItemProps[]
}

function ProductGroup({data}: ProductGroupProps) {
  return (
    <section className='flex flex-row flex-wrap  gap-y-5 justify-evenly py-3'>
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