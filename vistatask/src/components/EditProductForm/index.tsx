import React, { useContext, useState } from 'react'
import IngredientInput from '../Inputs/IngredientsInput'
import { useFormik } from 'formik';
import { productType } from '../../types/product.type';
import { AppContext } from '../../context/store';
import ImageUploadButton from '../Buttons/ImageUploaderButton';
import { useAppDispatch} from '../../redux/store';
import { editProduct } from '../../redux/features/tasks/productsSlice';
import { useLocation } from 'react-router-dom';
import { FaEdit } from "react-icons/fa"

const EditeditProductForm: React.FC = (): JSX.Element => {
    
const {setIsClicked,setOpenEditModal,targetedProduct,setTargetedProduct} = useContext(AppContext); 

const [ingredients, setIngredients] = useState<string[]>([]);
const location = useLocation(); 
const currentPath = location.pathname;
const editProductDispatch = useAppDispatch();

const formik = useFormik<productType>({

initialValues:{

    id:0 , 
    image: "" , 
    title : ""  , 
    weight:""   ,
    price: "" , 
    calories: "" , 
    ingredients: [] , 
    vegan : false ,
    readOnly: false

}, 

    onSubmit:(data,{resetForm})=>{
        console.log('click shodam')

        data = {
            title: data.title || targetedProduct.title ,
            id: targetedProduct.id,
            ingredients: [...targetedProduct.ingredients,...ingredients],
            image: targetedProduct.image ,
            weight: data.weight || targetedProduct.weight , 
            calories: data.calories || targetedProduct.calories , 
            price: data.price || targetedProduct.price ,
            vegan: data.vegan || targetedProduct.vegan , 
            readOnly: false
        }

        console.log('form data: ' , data)

        editProductDispatch(editProduct({
            categoryName:currentPath.slice(10) , 
            product:data
        }))

        setIngredients([])
        setTimeout(()=>{
            resetForm()
        },2000)

        setIsClicked(false);
        setOpenEditModal(false);
    }
})


const handleCloseForm = (e: React.FormEvent): void => {
  e.preventDefault();
  setIsClicked(false);
  setOpenEditModal(false);
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

return <form onSubmit={formik.handleSubmit} className={`editProductForm flex flex-col justify-around gap-3 bg-white rounded-sm py-6 px-8 text-black h-100vh w-[430px] h-screen transition ease-linear delay-300 overflow-scroll`}>
    <header className="formHeader w-full flex justify-between">
        <div className="headerTitleWrapper">
            <h3 className="formHaderTitle text-2xl text-gray-900">
                Edit product
            </h3>
        </div>

        <button className="closeFormButton" onClick={handleCloseForm}>
            <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" alt="cliseFormButtonIcon" width={"30px"} />
        </button>
    </header>

    <div className="productNameWrapper flex flex-col">
        <label htmlFor="title font-bold text-lg" className='font-semibold text-lg text-neutral-900'>Name of the product</label>
        <input onChange={formik.handleChange} value={formik.values.title} type="text" name='title' id='title' className='w-full pl-3 mt-2 h-14 rounded-md border-2 border-neutral-300' placeholder={targetedProduct.title}/>
    </div>

    <div className="productIngredientsWrapper">
        <IngredientInput ingredientsProp={[...targetedProduct.ingredients,...ingredients]} onComplete={(inputVal)=>{
            setIngredients([...targetedProduct.ingredients,...ingredients, inputVal]);}} 
            onRemove={(data)=>{
                const filter = ingredients.filter((item)=>{
                    return data !== item
                })
                setIngredients(filter)
            }} />
    </div>

    <div className="checkBoxWrapper flex items-center gap-4">
        <input type="checkbox" className='w-12 h-10 appearance-none rounded-md border-2 border-neutral-300' name="vegan" checked={formik.values.vegan} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <img src="https://img.icons8.com/?size=100&id=O63wamyU8HXl&format=png&color=000000" alt="veganIcon" width={"25px"} className='ml-3'/>
        <label htmlFor="vegan" className='font-semibold text-lg text-neutral-900 font-poppins'>Suitable for vegans</label>
    </div>

    <div className="weight-Calories-Wrapper w-full flex gap-2 justify-between">

        <div className='wightWrapper w-5/6 flex flex-col'>
            <label htmlFor="weight" className='font-semibold text-lg text-neutral-900'>Weight in grams</label>
            <input onChange={formik.handleChange} value={formik.values.weight} type="text" name='weight' id='weight' className='w-full pl-3 mt-2 h-14 rounded-md border-2 border-neutral-300' placeholder={targetedProduct.weight} />
        </div>
        <div className='caloriesWrapper w-5/6 flex flex-col'>
            <label htmlFor="calories" className='font-semibold text-lg text-neutral-900'>Calories</label>
            <input onChange={formik.handleChange} value={formik.values.calories} type="text" name='calories' id='calories' className='w-full mt-2 pl-3 h-14 rounded-md border-2 border-neutral-300' placeholder={targetedProduct.calories} />
        </div>
    </div>

    <div className="productPriceWrapper flex flex-col">
        <label htmlFor="productPrice" className='font-semibold text-lg text-neutral-900'>Price of the product</label>
    
        <div className="relative w-full">
            <span className="absolute mr-3 pt-2 inset-y-0 left-0 flex items-center pl-6 text-gray-900 font-bold text-lg">$</span>
            <input onChange={formik.handleChange} value={formik.values.price} type="text" name="price" id="price" 
            className="pl-10 w-full text-lg mt-2 h-14 rounded-md border-2 border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black" placeholder={targetedProduct.price} />
        </div>

    </div>

    <div className="uploadImgWrapper flex justify-between items-center">
        <div className="titleWrapper flex flex-col">
            <p className="title font-semibold text-lg text-neutral-900">Upload photo</p>
            <p className="text-gray-500">JPG,max,2MB</p>
        </div>

        <ImageUploadButton />

    </div>

    <button type='submit' className='submitButton bg-neutral-800 text-white w-full rounded-lg px-4 py-2 font-montserrat flex justify-center items-center gap-2'>
            <div className="submitIcons flex items-center gap-2 mr-3">
                <span className='text-sm'> <FaEdit /></span>
            </div>
            <p className="font-semibold text-lg text-neutral-200">Edit Product</p>
    </button>

  </form>
}

export default EditeditProductForm