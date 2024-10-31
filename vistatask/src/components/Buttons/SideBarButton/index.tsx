import React from 'react'
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

  return <div className={`headerButtonWrapper w-full flex gap-3 pl-5 ${isClickedProp && 'border-r-green-500 bg-green-100 border-r-4'} py-2 transition-all duration-75`}>
        <img src={iconUrl} alt="sideBarIcon" width={"35px"}/>
        <button className={`headerButton font-iranyekan text-lg sm:text-xl lg:text-2xl`} onClick={()=>{
            handleClick(navigateProp)}}> {title} </button>
  </div>
  
}

export default SideBarButton