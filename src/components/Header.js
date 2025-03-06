import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons for mobile menu

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Acheter", path: "#" },
    { name: "Louer", path: "/louer" },
    { name: "Estimation", path: "/estimation" },
    { name: "Investisseurs", path: "/investisseurs" },
    { name: "Prix immobiliers", path: "/PrixImmobliers" },
    { name: "Trouver un agent", path: "/TrouverAgent" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-transparent relative" style={{background:"#F9FAFB"}}>
      {/* Top Header Section */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="ImmoXpert" className="h-10" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center space-x-2">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5996 19.25H4.34961C1.72461 19.25 1.72461 18.0687 1.72461 16.625V15.75C1.72461 15.2687 2.11836 14.875 2.59961 14.875H18.3496C18.8309 14.875 19.2246 15.2687 19.2246 15.75V16.625C19.2246 18.0687 19.2246 19.25 16.5996 19.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.1301 11.375V14.875H2.86133V11.375C2.86133 8.015 5.23258 5.20625 8.39133 4.5325C8.86383 4.4275 9.35383 4.375 9.86133 4.375H11.1301C11.6376 4.375 12.1363 4.4275 12.6088 4.5325C15.7676 5.215 18.1301 8.015 18.1301 11.375Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.6875 3.9375C12.6875 4.1475 12.6612 4.34 12.6087 4.5325C12.1362 4.4275 11.6375 4.375 11.13 4.375H9.86125C9.35375 4.375 8.86375 4.4275 8.39125 4.5325C8.33875 4.34 8.3125 4.1475 8.3125 3.9375C8.3125 2.73 9.2925 1.75 10.5 1.75C11.7075 1.75 12.6875 2.73 12.6875 3.9375Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.125 9.625H7.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Pack Pro</span>
          </button>
          <button className="text-white px-4 py-2 rounded-lg transition" style={{background:"#7069F9"}}>
            Se connecter
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Gradient Line */}
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" 
        style={{ maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)" }}
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 justify-center mt-5 mb-3">
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <Link
              to={item.path}
              className={`text-gray-700 hover:text-primary transition ${
                location.pathname === item.path ? "font-bold text-black" : ""
              }`}
            >
              {item.name}
            </Link>
            {location.pathname === item.path && (
              <div 
                className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" 
                style={{ maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)" }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-gray-700 hover:text-primary transition ${
                  location.pathname === item.path ? "font-bold text-black" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-3 mt-4">
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center space-x-2 justify-center">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG paths (same as above) */}
                  {/* ... */}
                </svg>
                <span>Pack Pro</span>
              </button>
              <button 
                className="text-white px-4 py-2 rounded-lg transition" 
                style={{background:"#7069F9"}}
              >
                Se connecter
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;