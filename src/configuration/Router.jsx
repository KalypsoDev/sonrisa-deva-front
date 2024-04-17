import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homepage/HomePage';
import ProductFormPage from '../components/pages/productFormPage/ProductFormPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/product-form' element={<ProductFormPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router