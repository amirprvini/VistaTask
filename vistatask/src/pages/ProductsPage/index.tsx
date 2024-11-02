import { useContext } from "react"
import SearchInput from "../../components/Inputs/SearchInput"
import ProductForm from "../../components/ProductForm"
import ProductItems from "../../components/ProductItems"
import ProductsHeader from "../../components/ProductsHeader"
import { AppContext } from "../../context/store"
import EditProductForm from "../../components/EditProductForm"
import ProductInfoModal from "../../components/ProductInfoModal"

const ProductsPage: React.FC = (): JSX.Element => {

  const {isClicked,openEditModal,openInfoModal} = useContext(AppContext);
    
  return <div className='productsPageWrapper ml-auto py-5 flex flex-col gap-5 items-center w-calc-100-minus-14rem'>
     <div className="searchInputWrapper w-full"> <SearchInput/> </div>
     <div className="headerWrapper w-full flex justify-center"> <ProductsHeader/> </div>
     <div className="productsListWrapper w-full flex justify-center"> <ProductItems /> </div>
     <div className={`productFormWrapper fixed top-0 ${isClicked ? 'right-0' : '-right-[450px]'} transition ease-linear delay-300`}> <ProductForm/> </div>
     <div className={`editProductFormWrapper fixed top-0 ${openEditModal ? 'right-0' : '-right-[450px]'} transition ease-linear delay-300`}> <EditProductForm/> </div>
     <div className={`ProductInfoModalWrapper fixed top-0 ${openInfoModal ? 'right-0' : '-right-[450px]'} transition ease-linear delay-300`}> <ProductInfoModal/> </div>
    </div>
}

export default ProductsPage