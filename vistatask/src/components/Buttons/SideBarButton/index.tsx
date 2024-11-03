import React from 'react'
import OrdersNumber from '../OrdersNumber'
import { useNavigate } from 'react-router-dom'

interface HeaderButtonProps {
    title: string
    navigateProp : string 
    iconUrl : string
    isClickedProp ?: boolean
}

const SideBarButton: React.FC<HeaderButtonProps> = ({title,navigateProp,iconUrl,isClickedProp}):JSX.Element => {

    const navigate = useNavigate()
    const handleClick = (nav:string)=>{
        window.scrollTo(0,0);
        navigate(nav)
    }

  return <div className={`headerButtonWrapper w-full flex gap-5 pl-9 ${isClickedProp && 'border-r-green-500 bg-teal-50 bg-opacity-70 border-r-4'} py-5 transition-all duration-75`}>
        <img src={iconUrl} alt="sideBarIcon" width={"25px"}/>
        <button className={`sideBarButton text-neutral-950 font-sans font-semibold text-md sm:text-lg lg:text-xl`} onClick={()=>{
            handleClick(navigateProp)}}> {title} </button>
        {navigateProp.includes("orders") && <OrdersNumber/> }   
  </div>
  
}

export default SideBarButton