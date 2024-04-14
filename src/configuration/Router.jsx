import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homepage/HomePage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router