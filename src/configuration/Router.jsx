import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from '../components/pages/homepage/HomePage';
import EventPage from '../components/pages/eventPage/EventPage';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/eventos' element={<EventPage/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router