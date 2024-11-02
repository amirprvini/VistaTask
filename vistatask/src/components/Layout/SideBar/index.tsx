import {useEffect} from "react";
import SideBarButton from "../../Buttons/SideBarButton"
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = (): JSX.Element =>{

    const sideBarButtonsData = [
    {
        title:"Dashbord" , 
        icon:'https://img.icons8.com/fluency-systems-filled/25/dashboard-layout.png' ,
        navigateTo: "/dashbord" 
    },
    {
        title:"Orders" , 
        icon:'https://img.icons8.com/ios-glyphs/30/shopping-bag.png' ,
        navigateTo: "/orders" 
    },
    {
        title:"Products" , 
        icon:'https://img.icons8.com/ios-glyphs/25/package.png' ,
        navigateTo: "/products/maincourses" 
    },
    {
        title:"Restaurants" , 
        icon:'https://img.icons8.com/glyph-neue/25/marker--v1.png' ,
        navigateTo: "/restaurants" 
    },
    {
        title:"Drivers" , 
        icon:'https://img.icons8.com/ios-filled/25/driver.png' ,
        navigateTo: "/drivers" 
    },
]

    const location = useLocation(); 
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const handleSideBarLogoClick = ()=>{
        navigate('/') ;
    }

    useEffect(()=>{
    },[])

  return <div className="sideBar flex flex-col justify-start py-4 gap-3 bg-white text-black h-full w-64 border-r-2 border-r-neutral-300 rounded-sm shadow-md fixed top-0 left-0 mr-auto">

        <header className="sideBarHeaderWrapper w-full h-16 flex justify-center items-center gap-1">
            <div className="sideBarHeader w-full h-full flex gap-2 justify-center items-center" onClick={handleSideBarLogoClick}>
                <img src="https://img.icons8.com/?size=100&id=HzfMBDFej7au&format=png&color=000000" alt="logoIcon" width={"30px"}/>
                <h1 className="headerTitle font-bold text-xl text-neutral-600"> avoburger </h1>
            </div>
        </header>

        <ul className="SideBarButtonsList mt-6 font-bold lg:font-semibold w-full py-1 flex flex-col gap-1 items-center">
            {sideBarButtonsData.map((item,index)=>{
                return <li className="w-full flex justify-center" key={index}> <SideBarButton iconUrl={item.icon} isClickedProp={handleIsClicked(currentPath,item.navigateTo)} title={item.title} navigateProp={item.navigateTo}/> </li>
            })}
        </ul>

        <footer className="sideBarFooter w-full flex flex-col justify-center gap-8 sticky mt-auto">
            <div className="top flex flex-col justify-center px-6">
                <p className="text-center text-neutral-600 font-semibold">Done for the day?</p>
                <button className="flex items-center font-semibold justify-center mt-2 px-2 py-3 text-white rounded-lg bg-gradient-to-r from-emerald-300 to-green-500 hover:from-green-500 hover:to-green-700 focus:outline-none">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Send daily report
                </button>
            </div>

            <div className="avatarWrapper flex justify-around items-center pt-3 pb-1 px-2 border-t-[1px] border-neutral-200">
                <img src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000" alt="avatar" width={"50px"} />
                <p className="username text-gray-700 font-semibold text-lg"> Amir Parvini </p>
                <img src="https://img.icons8.com/ios-filled/30/menu-2.png" alt="menuIcon"/>
            </div>
        </footer>

    </div>
}


function handleIsClicked (currentPath:string,buttonPath:string){
    if(currentPath.includes('products')){
        
        if (currentPath.slice(1,8) === buttonPath.slice(1,8)){
            return true 
        }
        else
            return false 
    }else{
       
        if (currentPath.includes(buttonPath))
            return true 
        else
            return false 
    }
}

export default SideBar