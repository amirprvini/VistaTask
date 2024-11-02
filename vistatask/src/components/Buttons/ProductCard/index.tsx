import { useContext } from "react";
import { AppContext } from "../../../context/store";
import { useAppDispatch } from "../../../redux/store";
import { editProduct } from "../../../redux/features/tasks/productsSlice";
import { useLocation } from "react-router-dom";

interface ProductCardProps {
    id: number
    title: string , 
    price : string , 
    image : string , 
    weight: string , 
    calories: string ,
    ingredients: string[],
    vagan: boolean ,
    readOnly: boolean ,
    onClickProp ?: ()=> void
}

const ProductCard: React.FC<ProductCardProps> = ({vagan,title,id,price,calories,image,weight,ingredients,readOnly,onClickProp}): JSX.Element => {

    const dispatch = useAppDispatch();
    const {setIsClicked,setOpenEditModal,setTargetedProduct} = useContext(AppContext);
    const location = useLocation(); 
    const currentPath = location.pathname;
    
    const handleReadOnly = ()=>{
        dispatch(editProduct({
            categoryName: currentPath.slice(10) , 
            product: {

                id:id , 
                image: image , 
                title : title , 
                weight: weight   ,
                price: price , 
                calories: calories, 
                ingredients: ingredients , 
                vegan : vagan,
                readOnly: !readOnly

            }}))
        }


    const handleEditButton = ()=>{
        setIsClicked(false);
        setOpenEditModal(true);
        setTargetedProduct({

    id:id , 
    image: image , 
    title : title , 
    weight: weight   ,
    price: price , 
    calories: calories, 
    ingredients: ingredients , 
    vegan : vagan,
    readOnly: readOnly

    })}

    return <div className='productCardWrapper cursor-pointer hover:scale-105 transition-all duration-150 w-80 bg-white border-2 border-neutral-200 rounded-xl shadow-md text-black font-mono flex flex-col items-center py-5' 
  onClick={onClickProp}>

    <div className="veganWrapper w-full flex justify-end px-8 h-8">
        {vagan ? <img src="https://img.icons8.com/?size=100&id=O63wamyU8HXl&format=png&color=000000" alt="veganIcon" width={"40px"} /> : null}
    </div>

    <div className="productImgWrapper bg-white px-3 flex justify-center items-center">
        <img src={image} alt="ProductPhoto" width={"150px"}/>
    </div>

    <div className="productInfoWrapper h-min w-full flex flex-col justify-between px-4 font-dana my-7">

        <div className="productTitleWrapper w-full flex justify-center">
            <h1 className="productTitle text-2xl font-bold text-center"> {title} </h1>
        </div>

        <div className="productWeightWrapper w-full flex justify-center">
            <p className="productWeight text-xl text-gray-600"> {weight}g </p>
        </div>

        <div className="productMaterialsWrapper w-full flex justify-center h-12">
            <p className="productMaterials text-lg flex flex-wrap text-center text-gray-600"> {ingredients.join(", ")} </p>
        </div>

    </div>

    <div className="productCardFooter w-full flex items-center justify-between px-6">
        
        <div className="productPriceWrapper h-full flex justify-end items-end font-dana">
            <h2 className="productPrice text-2xl"> $<span className='font-bold'>{price}</span></h2>
        </div>

        <div className="footerButtonsWrapper flex justify-center items-center gap-3">
            
            <button className={`readOnlyButton p-3 rounded-md border border-neutral-300 ${readOnly && 'bg-gray-300'}`} onClick={handleReadOnly}>
                <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" alt="readOnlyButton" width={"25px"} />
            </button>

            <button className={`editInfoButton p-3 rounded-md border border-neutral-300`} onClick={handleEditButton}>
                <img src="https://img.icons8.com/?size=100&id=2969&format=png&color=000000" alt="moreInfo" width={"25px"} />
            </button>

        </div>
        
    </div>

  </div>
}

export default ProductCard