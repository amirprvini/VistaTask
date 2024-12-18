import React from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonProps {
    title: string
    navigateProp : string 
    iconUrl : string
    isClickedProp ?: boolean
}

const ProductsHeaderButton: React.FC<HeaderButtonProps> = ({title,navigateProp,iconUrl,isClickedProp}):JSX.Element => {

    const navigate = useNavigate()
    const handleClick = (nav:string)=>{
        window.scrollTo(0,0);
        navigate(nav)
    }

  return <div className={`headerButtonWrapper font-montserrat w-fit text-neutral-900 h-full flex justify-center flex-wrap items-center gap-2 ${isClickedProp && 'border-b-black border-b-4'} py-2 transition-all`}>
        <img src={iconUrl} alt="ProductsHeaderIcon" width={"30px"}/>
        <button className={`headerButton h-full pt-1 font-iranyekan text-lg sm:text-xl`} onClick={()=>{
            handleClick(navigateProp)}}> {title} </button>
  </div>
  
}

export default ProductsHeaderButton