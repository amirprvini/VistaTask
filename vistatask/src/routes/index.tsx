import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../components/Layout'



const RouteProvider: React.FC = ():JSX.Element => {

  return(

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayOut/>}>
            
            </Route>
        </Routes>
    </BrowserRouter>

  )
}


export default RouteProvider