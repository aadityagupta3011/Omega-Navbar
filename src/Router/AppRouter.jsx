import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/MainPages/Home';
import AboutUs from '../Pages/MainPages/AboutUs';
import Products from '../Pages/MainPages/Products';
import Services from '../Pages/MainPages/Services';
import Gallery from '../Pages/MainPages/Gallery';
import Client from '../Pages/MainPages/Client';
import Careers from '../Pages/MainPages/Careers';
import ContactUs from '../Pages/MainPages/ContactUs';
import Blog from '../Pages/MainPages/Blog';
import Download from '../Pages/MainPages/Download';

const AppRouter = () => {
  return (
    <Router>
      {/* Navbar included on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/client" element={<Client />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
