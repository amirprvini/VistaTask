import SearchInput from "../../components/Inputs/SearchInput"
import ProductItems from "../../components/ProductItems"
import ProductsHeader from "../../components/ProductsHeader"

const ProductsPage: React.FC = (): JSX.Element => {

  
    const data = [
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
        {
            id:1 ,
            image: "/images/Kourosh-RoofGarden-2.jpg" , 
            title : "cheese Burger" , 
            weight: "150" ,
            price: "22,37" ,
            materials: "cheese Burgercheese Burger cheese Burger cheese Burgercheese Burger" , 
            readOnly: false
        },
    ]

  return <div className='productsPageWrapper w-5/6 py-5 flex flex-col gap-5 items-center'>
     <div className="searchInputWrapper w-full"> <SearchInput/> </div>
     <div className="headerWrapper w-full flex justify-center"> <ProductsHeader/> </div>
     <div className="productsListWrapper w-full flex justify-center"> <ProductItems productsList={data}/> </div>
    </div>
}

export default ProductsPage