import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homepage/HomePage';
import NewProductAdminPage from '../components/pages/newProductAdminPage/NewProductAdminPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/create-product' element={<NewProductAdminPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router