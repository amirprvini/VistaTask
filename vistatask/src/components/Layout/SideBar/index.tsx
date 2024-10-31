import {useEffect} from "react";
import SideBarButton from "../../Buttons/SideBarButton"
import { useLocation, useNavigate } from "react-router-dom";

const SideBar: React.FC = (): JSX.Element =>{

    const sideBarButtonsData = [
    {
        title:"Dashbord" , 
        icon:'https://img.icons8.com/?size=100&id=uWyVYfqqdYxW&format=png&color=000000' ,
        navigateTo: "/dashbord" 
    },
    {
        title:"Orders" , 
        icon:'https://img.icons8.com/?size=100&id=12428&format=png&color=000000' ,
        navigateTo: "/orders" 
    },
    {
        title:"Products" , 
        icon:'https://img.icons8.com/?size=100&id=89619&format=png&color=000000' ,
        navigateTo: "/products/maincourses" 
    },
    {
        title:"Restaurants" , 
        icon:'https://img.icons8.com/?size=100&id=7880&format=png&color=000000' ,
        navigateTo: "/restaurants" 
    },
    {
        title:"Drivers" , 
        icon:'https://img.icons8.com/?size=100&id=9364&format=png&color=000000' ,
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

  return <div className="sideBar flex flex-col gap-3 bg-white text-black h-full w-56 border-r-2 border-r-neutral-300 rounded-sm shadow-md">

        <header className="sideBarHeaderWrapper w-full h-16 flex justify-center items-center gap-1">
            <div className="sideBarHeader w-full h-full flex gap-1 justify-center items-center" onClick={handleSideBarLogoClick}>
                <img src="https://img.icons8.com/?size=100&id=HzfMBDFej7au&format=png&color=000000" alt="logoIcon" width={"30px"}/>
                <h1 className="headerTitle font-bold text-lg"> avoburger </h1>
            </div>
        </header>

        <ul className="SideBarButtonsList font-bold lg:font-semibold w-full py-1 flex flex-col gap-2 items-center">
            {sideBarButtonsData.map((item,index)=>{
                return <li className="w-full flex justify-center" key={index}> <SideBarButton iconUrl={item.icon} isClickedProp={handleIsClicked(currentPath,item.navigateTo)} title={item.title} navigateProp={item.navigateTo}/> </li>
            })}
        </ul>

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