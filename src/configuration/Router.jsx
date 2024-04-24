import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/pages/homePage/HomePage';
import PanelAdminPage from '../components/pages/panelAdminPage/PanelAdminPage';
import NewProductAdminPage from '../components/pages/newProductAdminPage/NewProductAdminPage';
import EventPage from '../components/pages/eventPage/EventPage';
import ProductPage from '../components/pages/productPage/ProductPage';
import ContactFormPage from '../components/pages/contactFormPage/ContactFormPage';
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
import AboutMePage from '../components/pages/aboutMePage/AboutMePage';
import TherapiesPage from '../components/pages/therapiesPage/TherapiesPage';
import EditProductAdminPage from '../components/pages/editProductAdminPage/EditProductAdminPage';
import EditEventAdminPage from '../components/pages/editEventAdminPage/EditEventAdminPage';

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventos" element={<EventPage />} />
        <Route path="/tienda-solidaria" element={<ProductPage />} />
        <Route path="/formulario-contacto" element={<ContactFormPage />} />
        <Route path="/inicio-sesion-admin" element={<LoginAdminPage />} />
        <Route path="/sindrome-angelman" element={<AngelmanSyndromePage />} />
        <Route path="/solicitar-producto" element={<ProductFormPage />} />
        <Route path="/aviso-legal" element={<LegalNoticePage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/investigacion" element={<InvestigationPage />} />
        <Route path="/asociacion" element={<AssociationPage />} />
        <Route path="/quien-soy" element={<WhoAmIPage />} />
        <Route path="/sobre-deva" element={<AboutDevaPage />} />
        <Route path="/colabora" element={<CooperatePage />} />
        <Route path="/donacion" element={<DonationPage />} />
        <Route path="/acerca-de-mi" element={<AboutMePage />} />
        <Route path="/terapias" element={<TherapiesPage />} />

        <Route path="/admin" element={<PanelAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/agregar-producto" element={<NewProductAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/agregar-evento" element={<NewEventAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/productos" element={<TableProductsAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/productos-solicitados" element={<OrderedProductsAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/eventos" element={<TableEventsAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/editar-producto/:id" element={<EditProductAdminPage isAuthenticated={isAuthenticated} />}/>
        <Route path="/admin/editar-evento/:id"element={<EditEventAdminPage isAuthenticated={isAuthenticated} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router