import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './container/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Pricing from './container/Pricing/Pricing';
import NotFound from './container/NotFound/NotFound';
import Accordion from './container/Accordion/Accordion';
import Service from './Pages/Service/Service';




function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Accordion />} />
        <Route path='/service' element={<Service />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
