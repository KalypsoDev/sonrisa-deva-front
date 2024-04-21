import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homePage/HomePage';
import PanelAdminPage from '../components/pages/panelAdminPage/PanelAdminPage';
import NewProductAdminPage from '../components/pages/newProductAdminPage/NewProductAdminPage';
import EventPage from '../components/pages/eventPage/EventPage';
import ProductPage from '../components/pages/productPage/ProductPage';
import ContactFormPage from '../components/pages/contactForm/ContactFormPage';
import NewEventAdminPage from '../components/pages/newEventAdminPage/NewEventAdminPage';
import LoginAdminPage from '../components/pages/loginAdminPage/LoginAdminPage';
import ProductFormPage from '../components/pages/productFormPage/ProductFormPage';
import TableProductsAdminPage from '../components/pages/tableProductsAdminPage/TableProductsAdminPage';
import LegalNoticePage from '../components/pages/legalNoticePage/LegalNoticePage';
import PrivacyPolicyPage from '../components/pages/privacyPolicyPage/PrivacyPolicyPage';
import AssociationPage from '../components/pages/associationPage/AssociationPage';

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
                  <Route path='/solicitar-producto' element={<ProductFormPage/>}></Route>
                  <Route path='/admin/productos' element={<TableProductsAdminPage/>}></Route>
                  <Route path='/aviso-legal' element={<LegalNoticePage/>}></Route>
                  <Route path='/politicas-privacidad' element={<PrivacyPolicyPage/>}></Route>
                  <Route path='/asociacion' element={<AssociationPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router