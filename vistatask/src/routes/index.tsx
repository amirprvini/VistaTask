import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import {ContextProvider } from '../context/store'
import ProductsPage from '../pages/ProductsPage'
import RestaurantsPage from '../pages/RestaurantsPage'
import DashbordPage from '../pages/DashbordPage'
import DriversPage from '../pages/DriversPage'
import OrdersPage from '../pages/OrdersPage'



const RouteProvider: React.FC =(): JSX.Element => {

  return(
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LayOut/>}>
              
              <Route index path='/products/maincourses' element={<ProductsPage/>} />
              <Route path='/products/:id' element={<ProductsPage/>} />
              <Route path='/restaurants' element={<RestaurantsPage/>} />
              <Route path='/dashbord' element={<DashbordPage/>} />
              <Route path='/drivers' element={<DriversPage/>} />
              <Route path='/orders' element={<OrdersPage/>} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
  )
}


export default RouteProvider