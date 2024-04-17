import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homePage/HomePage';
import ContactFormPage from '../components/pages/contactForm/ContactFormPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/contact-form' element={<ContactFormPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router