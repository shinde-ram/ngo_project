import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home, UserBtn } from './component/Home';
import { List, OneNgo } from './component/List';
import { Event } from './component/Event';
import { AboutUs } from './component/AboutUs';
import { OurImpact } from './component/Impact';
import { ContactUs } from './component/ContactUs';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import Login from './component/Forms/Login';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex">
      {!isHomePage && (
        <div className="w-[15%] hidden md:flex">
          <Header />
        </div>
      )}
      <div className={`${isHomePage ? 'w-full' : 'flex-grow w-[85%]'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<OneNgo />} />
          <Route path="/events" element={<Event />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          {/* Add a 404 Route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        {!isHomePage && <Footer />}
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
