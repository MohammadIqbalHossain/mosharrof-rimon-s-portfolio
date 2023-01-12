import './App.scss';

import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './container/Contact/Contact';




function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
