import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar'

import {
  Advantages,
  Header,
  Footer,
  Experience,
  Feature,
  Testimonial,
  Work
}
  from './container/index';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Advantages />
      <Experience />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
