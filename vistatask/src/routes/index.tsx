import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import {ContextProvider } from '../context/store'
import ProductsPage from '../pages/ProductsPage'
import RestaurantsPage from '../pages/RestaurantsPage'
import DashbordPage from '../pages/DashbordPage'
import DriversPage from '../pages/DriversPage'
import OrdersPage from '../pages/OrdersPage'
import { Provider } from 'react-redux'
import { store } from '../redux/store'



const RouteProvider: React.FC =(): JSX.Element => {

  return(
      <Provider store={store}>
        <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LayOut/>}>
              
              <Route index element={<Navigate to="/products/maincourses" replace />}  />
              <Route path='/products/:id' element={<ProductsPage/>} />
              <Route path='/restaurants' element={<RestaurantsPage/>} />
              <Route path='/dashbord' element={<DashbordPage/>} />
              <Route path='/drivers' element={<DriversPage/>} />
              <Route path='/orders' element={<OrdersPage/>} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
      </Provider>
  )
}


export default RouteProvider