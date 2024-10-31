import React from 'react'
import { productType } from '../../types/product.type'
import ProductCard from '../Buttons/ProductCard'

interface IProductItems {
    productsList: productType[]
}
const ProductItems: React.FC<IProductItems> = ({productsList}): JSX.Element => {

  return <ul className="productsList w-full px-5 py-2 flex flex-wrap justify-start gap-4">
    {productsList.map((product:productType)=>{
        return <li key={product.id}>
            <ProductCard {...product} onClickProp={()=>{}} />
        </li>
    })}
  </ul>
}

export default ProductItems