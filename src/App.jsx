import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './component/Home';
import { List, OneNgo } from './component/List';
import {Event} from './component/Event';
import {AboutUs} from './component/AboutUs'
import {OurImpact} from './component/Impact'
import {ContactUs} from './component/ContactUs'
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import Login from './component/Forms/Login';

function App() {
  const location = useLocation();

  // Conditionally hide Header when on the Home page
  const isHomePage = location.pathname === "/";

  return (
    <div className='flex'>
      {!isHomePage && (
        <div className='w-[15%] hidden md:flex'>
          <Header />
        </div>
      )}
      <div className={`${isHomePage ? 'w-full' : 'flex-grow w-[85%]'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/events" element={<Event />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/list/:id" element={<OneNgo />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        {!isHomePage && (
          <Footer />
      )}
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default MainApp;
