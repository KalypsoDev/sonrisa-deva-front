import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homepage/HomePage';
import ProductPage from '../components/pages/productPage/ProductPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/tienda-solidaria' element={<ProductPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router