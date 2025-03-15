
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-soccerix-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className={`text-xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-soccerix-teal' : 'text-soccerix-teal'
            }`}>
              Soccerix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" isActive={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/dashboard" isActive={location.pathname === '/dashboard'}>
              Dashboard
            </NavLink>
            <NavLink to="/report" isActive={location.pathname === '/report'}>
              Report
            </NavLink>
            <Link 
              to="/dashboard" 
              className="btn-primary ml-4"
            >
              Start Analysis
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-soccerix-teal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="py-4 px-6 flex flex-col gap-4">
            <MobileNavLink to="/" isActive={location.pathname === '/'}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/dashboard" isActive={location.pathname === '/dashboard'}>
              Dashboard
            </MobileNavLink>
            <MobileNavLink to="/report" isActive={location.pathname === '/report'}>
              Report
            </MobileNavLink>
            <Link 
              to="/dashboard" 
              className="btn-primary text-center mt-2"
            >
              Start Analysis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link 
      to={to} 
      className={`link-hover text-base font-medium transition-colors duration-300 ${
        isActive ? 'text-soccerix-teal' : 'text-gray-700 hover:text-soccerix-teal'
      }`}
    >
      {children}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link 
      to={to} 
      className={`text-lg font-medium py-2 border-b border-gray-100 ${
        isActive ? 'text-soccerix-teal' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
