import React, { useContext} from 'react'
import { AppContext } from '../../context/store';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { editProduct } from '../../redux/features/tasks/productsSlice';

const ProductInfoModal: React.FC = (): JSX.Element => {
    
const {setIsClicked,setOpenEditModal,targetedProduct,setTargetedProduct,setOpenInfoModal} = useContext(AppContext); 
const location = useLocation(); 
const currentPath = location.pathname;
const dispatch = useAppDispatch();
    

const handleCloseForm = (e: React.FormEvent): void => {

  e.preventDefault();
  setIsClicked(false);
  setOpenEditModal(false);
  setOpenInfoModal(false);

  dispatch(editProduct({
    categoryName: currentPath.slice(10) , 
    product: {
        ... targetedProduct , 
        readOnly : false
    }
  }))

  setTargetedProduct({

    id:0 , 
    image:  "" , 
    title : ""  , 
    weight:""   ,
    price: "" , 
    calories: "" , 
    ingredients: [] , 
    vegan : false ,
    readOnly: false

} , )
};

  return <div className={`ProductInfoModal flex flex-col justify-around gap-3 bg-white rounded-sm py-6 px-8 text-black h-100vh w-[430px] h-screen transition ease-linear delay-300`}>
    <header className="formHeader w-full flex justify-between">
        <div className="headerTitleWrappe w-full">
            <h3 className="formHaderTitle text-4xl">
                Product Info
            </h3>
        </div>

        <button className="closeFormButton" onClick={handleCloseForm}>
            <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" alt="cliseFormButtonIcon" width={"30px"} />
        </button>
    </header>

    <div className="productImageWrapper flex flex-col">
        <img src={targetedProduct.image} alt="productImage" />
    </div>

    <div className="productNameWrapper w-full flex justify-center text-3xl">
        <h1 className="productName"> {targetedProduct.title} </h1>
    </div>

    <div className="productIngredientsWrapper w-full flex flex-col justify-center">
        <h2 className='text-xl font-bold'>Ingredients: </h2>
        <ul className="w-full flex flex-wrap gap-3 mt-3">
            {targetedProduct.ingredients.map((item,index)=>{
                return <li key={index} className='bg-gray-400 rounded-md px-2 py-1'> {item} </li>
            })}
        </ul>
    </div>

    <div className="weight-Calories-Wrapper w-full flex gap-2 justify-between">

        <div className='wightWrapper w-5/6 flex flex-col'>
            <p className='text-xl font-bold'>Weight: <span className='font-semibold'>{targetedProduct.weight}</span> </p>
        </div>

        <div className='caloriesWrapper w-5/6 flex flex-col'>
            <p className='text-xl font-bold'>Calories: <span className='font-semibold'>{targetedProduct.calories} cal</span> </p>
        </div>
    </div>

    <div className="productPriceWrapper flex flex-col">
        <p className='text-xl font-bold'>Price of the product: <span className='font-semibold'> {targetedProduct.price} $ </span> </p>
    </div>
  </div>
}

export default ProductInfoModal