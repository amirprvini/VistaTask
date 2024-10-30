import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

interface FooterProps {}
const Footer: React.FC<FooterProps> = (): JSX.Element => {

    const location = useLocation(); 
    const currentPath = location.pathname;


  return <div className={`bg-black text-white w-full px-2 py-1 h-min flex flex-col gap-3 justify-center items-center ${currentPath === '/login' || currentPath === '/signUp' ? 'hidden' : ''}`}>

    <div className="logoWrapper w-full flex justify-center">
      <img src="./images/kouroshLogo.png" alt="footerLogo" width='400px'/>
    </div>
    <div className="madeByWrapper">
        <h2 className="madeBy font-dana text-lg sm:text-xl lg:text-2xl">طراحی و اجرا توسط امیر پروینی</h2>
    </div>

  </div>
}

export default Footer