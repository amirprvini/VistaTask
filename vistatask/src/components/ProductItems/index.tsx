import React, { useContext } from 'react'
import { productsListType, productType } from '../../types/product.type'
import ProductCard from '../Buttons/ProductCard'
import AddProductButton from '../Buttons/AddProductButton'
import { AppContext } from '../../context/store'
import { useApplicationSelector } from '../../redux/store'
import { useLocation } from 'react-router-dom'

const ProductItems: React.FC = (): JSX.Element => {

  const {serachInputValue,setIsClicked,isFocuced} = useContext(AppContext);
  const reduxState = useApplicationSelector(state=>state)
  const location = useLocation(); 
  const currentPath = location.pathname;

  const handleClick = ()=>{
      setIsClicked(true)  
  }
  

  return <ul className="productsList w-full px-8 py-2 flex flex-wrap justify-center gap-x-6 gap-y-10">
    {reduxState.productsList.categories.map((categoryList:productsListType)=>{
          console.log('current path: ' , currentPath.slice(10));
        if(currentPath.includes(categoryList.categoryName.toLowerCase())){
            if(isFocuced && serachInputValue !== ""){
              console.log('search input vall855: ' , serachInputValue)
              return categoryList.filteredProductsList.map((product:productType)=>{
            return <li key={product.id}>
            <ProductCard {...product} vagan={product.vegan} ingredients={product.ingredients} onClickProp={()=>{}} /> </li>
          })}else{
              console.log('search input vall666: ' , serachInputValue)
              return categoryList.originalProductsList.map((product:productType)=>{
            return <li key={product.id}>
            <ProductCard {...product} vagan={product.vegan} ingredients={product.ingredients} onClickProp={()=>{}} /> </li>
          })}
        }
    })}
    <div className="addproductBtnWrapper flex justify-center items-center"> <AddProductButton onClickProp={handleClick}/> </div>
  </ul>
}

export default ProductItems