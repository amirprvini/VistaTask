import React from 'react'

interface ProductCardProps {
    id: number
    title: string , 
    price : string , 
    image : string , 
    weight: string , 
    materials: string , 
    readOnly: boolean ,
    onClickProp ?: ()=> void
}

const ProductCard: React.FC<ProductCardProps> = ({title,price,image,weight,materials,onClickProp}): JSX.Element => {
  return <div className='productCardWrapper cursor-pointer hover:scale-105 transition-all duration-150 w-80 bg-white border-2 border-neutral-200 rounded-md shadow-md text-black font-mono flex flex-col items-center' 
  onClick={onClickProp}>

    <div className="productImgWrapper bg-white">
        <img src={image} alt="ProductPhoto"/>
    </div>

    <div className="productInfoWrapper h-min w-full flex flex-col justify-between px-4 font-dana my-7">

        <div className="productTitleWrapper w-full flex justify-center">
            <h1 className="productTitle text-2xl font-bold text-center"> {title} </h1>
        </div>

        <div className="productWeightWrapper w-full flex justify-center">
            <p className="productWeight text-xl text-gray-600"> {weight}g </p>
        </div>

        <div className="productMaterialsWrapper w-full flex justify-center">
            <p className="productMaterials text-lg flex flex-wrap text-center text-gray-600"> {materials} </p>
        </div>

    </div>

    <div className="productCardFooter w-full flex justify-between px-6">
        
        <div className="productPriceWrapper h-full flex justify-end items-end font-dana">
            <h2 className="productPrice text-xl"> $<span className='font-bold'>{price}</span></h2>
        </div>

        <div className="footerButtonsWrapper flex justify-center items-center gap-3">
            
            <button className="readOnlyButton">
                <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" alt="readOnlyButton" width={"40px"} />
            </button>

            <button className="moreInfoButton">
                <img src="https://img.icons8.com/?size=100&id=2969&format=png&color=000000" alt="moreInfo" width={"40px"} />
            </button>

        </div>
        
    </div>

  </div>
}

export default ProductCard