import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homePage/HomePage';
import PanelAdminPage from '../components/pages/panelAdminPage/PanelAdminPage';
import NewProductAdminPage from '../components/pages/newProductAdminPage/NewProductAdminPage';
import EventPage from '../components/pages/eventPage/EventPage';
import ProductPage from '../components/pages/productPage/ProductPage';
import ContactFormPage from '../components/pages/contactForm/ContactFormPage';
import NewEventAdminPage from '../components/pages/newEventAdminPage/NewEventAdminPage';
import LoginAdminPage from '../components/pages/loginAdminPage/LoginAdminPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/admin' element={<PanelAdminPage/>}></Route>
                  <Route path='/admin/agregar-producto' element={<NewProductAdminPage/>}></Route>
                  <Route path='/eventos' element={<EventPage/>}></Route>
                  <Route path='/tienda-solidaria' element={<ProductPage/>}></Route>
                  <Route path='/formulario-contacto' element={<ContactFormPage/>}></Route>
                  <Route path='/admin/agregar-evento' element={<NewEventAdminPage/>}></Route>
                  <Route path='/inicio-sesion-admin' element={<LoginAdminPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router