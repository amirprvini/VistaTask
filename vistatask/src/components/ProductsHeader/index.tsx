import { useLocation} from "react-router-dom";
import ProductsHeaderButton from "../Buttons/ProductsHeaderButton";

const ProductsHeader: React.FC = (): JSX.Element =>{

    const ProductsHeaderButtonsData = [
    {
        title:"Main courses" , 
        icon:'https://img.icons8.com/?size=100&id=95244&format=png&color=000000' ,
        navigateTo: "/products/maincourses" 
    },
    {
        title:"Side dishes" , 
        icon:'https://img.icons8.com/glyph-neue/100/tea-cup.png' ,
        navigateTo: "/products/sidedishes" 
    },
    {
        title:"Drinks" , 
        icon:'https://img.icons8.com/ios-filled/100/soda-cup.png' ,
        navigateTo: "/products/drinks" 
    },
    {
        title:"Other" , 
        icon:'https://img.icons8.com/ios-filled/100/burger-dip.png' ,
        navigateTo: "/products/other" 
    },
]

    const location = useLocation(); 
    const currentPath = location.pathname;

  return <header className="ProductsHeader w-[95%] mt-5 px-8 flex justify-around bg-white text-black min-h-24 border-b-2 border-b-neutral-300 rounded-2xl shadow-md">

        <ul className="ProductsHeaderButtonsList font-bold lg:font-semibold w-[90%] lg:w-3/4 h-full flex items-center">
            {ProductsHeaderButtonsData.map((item,index)=>{
                return <li className="w-full h-full flex justify-center" key={index}> <ProductsHeaderButton iconUrl={item.icon} isClickedProp={currentPath === item.navigateTo ? true : false} title={item.title} navigateProp={item.navigateTo}/> </li>
            })}
        </ul>

        <div className="menuVerticalWrapper w-[10%] lg:w-1/4 flex justify-end items-center">
            <img src="https://img.icons8.com/?size=100&id=98963&format=png&color=000000" alt="verticalMenu" width={"30px"} className="cursor-pointer"/>
        </div>

    </header>
}

export default ProductsHeader