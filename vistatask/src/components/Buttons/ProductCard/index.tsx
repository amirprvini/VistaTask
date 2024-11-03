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
    const {setIsClicked,setOpenEditModal,setTargetedProduct,setOpenInfoModal} = useContext(AppContext);
    const location = useLocation(); 
    const currentPath = location.pathname;
    
    const handleReadOnly = ()=>{

        setOpenEditModal(false);
        setOpenInfoModal(true);

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

    })

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

    return <div className='productCardWrapper min-h-80 relative cursor-pointer hover:scale-105 transition-all duration-150 w-[18rem] bg-white rounded-2xl shadow-md text-black font-sans flex flex-col items-center justify-around py-5' 
  onClick={onClickProp}>

    <div className="veganWrapper w-full flex justify-end px-3 h-8 relative">
        {vagan ? <img src="https://img.icons8.com/?size=100&id=O63wamyU8HXl&format=png&color=000000" alt="veganIcon" width={"30px"} className="absolute -top-1 right-5" /> : null}
    </div>

    <div className="productImgWrapper bg-white px-3 flex justify-center items-center mb-5">
        <img src={image} alt="ProductPhoto" width={"150px"} className="absolute -top-8"/>
    </div>

    <div className="productInfoWrapper h-min w-full flex flex-col justify-between px-4 font-dana my-7">

        <div className="productTitleWrapper w-full flex justify-center">
            <h1 className="productTitle text-xl font-bold font-poppins text-center text-neutral-900"> {title} </h1>
        </div>

        <div className="productWeightWrapper w-full flex justify-center">
            <p className="productWeight text-lg text-neutral-600 font-semibold font-montserrat"> {weight} </p>
        </div>

        <div className="productMaterialsWrapper w-full flex justify-center h-12">
            <p className="productMaterials text-lg flex flex-wrap text-center font-montserrat font-semibold text-neutral-800"> {ingredients.join(", ")} </p>
        </div>

    </div>

    <div className="productCardFooter w-full flex items-center justify-between px-10">
        
        <div className="productPriceWrapper h-full flex justify-end items-end font-sans text-neutral-800">
            <h2 className="productPrice text-2xl"> $<span className='font-semibold font-montserrat'>{price}</span></h2>
        </div>

        <div className="footerButtonsWrapper flex justify-center items-center gap-2">
            
            <button className={`readOnlyButton px-3 py-2 rounded-lg border border-neutral-300 `} onClick={handleReadOnly}>
                <img src={readOnly ? `https://img.icons8.com/?size=100&id=89236&format=png&color=000000` : `https://img.icons8.com/?size=100&id=60022&format=png&color=000000`} alt="readOnlyButton" width={"20px"} />
            </button>

            <button className={`editInfoButton px-3 py-2 rounded-lg border border-neutral-300`} onClick={handleEditButton}>
                <img src="https://img.icons8.com/?size=100&id=2969&format=png&color=000000" alt="moreInfo" width={"20px"} />
            </button>

        </div>
        
    </div>

  </div>
}

export default ProductCard