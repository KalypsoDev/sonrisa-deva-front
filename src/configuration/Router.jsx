import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../components/pages/homePage/HomePage';
import PanelAdminPage from '../components/pages/panelAdminPage/PanelAdminPage';
import NewProductAdminPage from '../components/pages/newProductAdminPage/NewProductAdminPage';
import EventPage from '../components/pages/eventPage/EventPage';
import ProductPage from '../components/pages/productPage/ProductPage';
import ContactFormPage from '../components/pages/contactForm/ContactFormPage';
import NewEventAdminPage from '../components/pages/newEventAdminPage/NewEventAdminPage';
import LoginAdminPage from '../components/pages/loginAdminPage/LoginAdminPage';
import AngelmanSyndromePage from '../components/pages/angelmanSyndromePage/AngelmanSyndromePage';
import ProductFormPage from '../components/pages/productFormPage/ProductFormPage';
import TableProductsAdminPage from '../components/pages/tableProductsAdminPage/TableProductsAdminPage';
import LegalNoticePage from '../components/pages/legalNoticePage/LegalNoticePage';
import PrivacyPolicyPage from '../components/pages/privacyPolicyPage/PrivacyPolicyPage';
import InvestigationPage from '../components/pages/investigationPage/InvestigationPage';
import OrderedProductsAdminPage from '../components/pages/orderedProductsAdminPage/OrderedProductsAdminPage';
import AssociationPage from '../components/pages/associationPage/AssociationPage';
import TableEventsAdminPage from '../components/pages/tableEventsAdminPage/TableEventsAdminPage';
import WhoAmIPage from '../components/pages/whoAmIPage/WhoAmIPage';
import AboutDevaPage from '../components/pages/aboutDevaPage/AboutDevaPage';
import CooperatePage from '../components/pages/cooperatePage/CooperatePage';
import DonationPage from '../components/pages/donationPage/DonationPage';

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
                  <Route path='/sindrome-angelman' element={<AngelmanSyndromePage/>}></Route>
                  <Route path='/solicitar-producto' element={<ProductFormPage/>}></Route>
                  <Route path='/admin/productos' element={<TableProductsAdminPage/>}></Route>
                  <Route path='/aviso-legal' element={<LegalNoticePage/>}></Route>
                  <Route path='/politica-privacidad' element={<PrivacyPolicyPage/>}></Route>
                  <Route path='/investigacion' element={<InvestigationPage/>}></Route>
                  <Route path='/admin/productos-solicitados' element={<OrderedProductsAdminPage/>}></Route>
                  <Route path='/asociacion' element={<AssociationPage/>}></Route>
                  <Route path='/admin/eventos' element={<TableEventsAdminPage/>}></Route>
                  <Route path='/quien-soy' element={<WhoAmIPage/>}></Route>
                  <Route path='/sobre-deva' element={<AboutDevaPage/>}></Route>
                  <Route path='/colabora' element={<CooperatePage/>}></Route>
                  <Route path='/donacion' element={<DonationPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router