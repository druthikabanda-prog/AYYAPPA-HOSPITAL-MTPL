import { useState } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Doctor', href: '#about-doctor' },
    { name: 'Services', href: '#services' },
    { name: 'Emergency Care', href: '#emergency-care' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-clean-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/assets/logo.png" alt="Sri Ayyappa Hospital Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-medical-blue tracking-tight">SRI AYYAPPA HOSPITAL</h1>
              <p className="text-sm text-gray-500 font-medium">Metpally</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-medical-blue font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#appointment" className="bg-medical-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-medical-blue focus:outline-none"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-medical-blue hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-medical-blue text-white px-6 py-3 rounded-md font-medium"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
