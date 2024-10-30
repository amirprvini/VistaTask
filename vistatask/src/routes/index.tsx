import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'
import {ContextProvider } from '../context/store'



const RouteProvider: React.FC = ():JSX.Element => {

  return(
      <ContextProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LayOut/>}>
            
              </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
  )
}


export default RouteProvider