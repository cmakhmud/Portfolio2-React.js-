import {Route , Routes} from 'react-router-dom';
import Layout from './pages/mainLayout/mainLayout';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Portfolio from './pages/portfolio/portfoliosPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Route>
    </Routes>
  );
}

export default App;
