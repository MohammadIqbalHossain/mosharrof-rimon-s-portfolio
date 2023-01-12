import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './container/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Pricing from './container/Pricing/Pricing';
import NotFound from './container/NotFound/NotFound';




function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
