import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home, About, Portfolio, Contact, Resume } from './components/pages';

const App = () => (
  <Router>
    <Header />
    <div className='bg-neutral justify-content'>
      <div className='container mx-auto'>
        <Routes>
          <Route path='/c20-react-portfolio/' element={<Home />} />
          <Route path='/c20-react-portfolio/about' element={<About />} />
          <Route
            path='/c20-react-portfolio/portfolio'
            element={<Portfolio />}
          />
          <Route path='/c20-react-portfolio/contact' element={<Contact />} />
          <Route path='/c20-react-portfolio/resume' element={<Resume />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </Router>
);

export default App;
