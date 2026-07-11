import { HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img src="/assets/logo.png" alt="Sri Ayyappa Hospital" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              Comprehensive medical care, general medicine consultation, and 24/7 emergency support in Metpally.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-medical-blue transition-colors">Home</a></li>
              <li><a href="#about-doctor" className="hover:text-medical-blue transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-medical-blue transition-colors">Medical Services</a></li>
              <li><a href="#appointment" className="hover:text-medical-blue transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Key Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>General Medicine</li>
              <li>Emergency Care</li>
              <li>Snake Bite Treatment</li>
              <li>Poisoning Cases</li>
              <li>Diabetes Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Nizamabad Road, Beside Bank of Baroda, Metpally</li>
              <li>Emergency: <a href="tel:+919000353462" className="text-white hover:text-medical-blue">9000353462</a></li>
              <li>Support: <a href="tel:+919951385513" className="text-white hover:text-medical-blue">9951385513</a></li>
              <li>
                <span className="inline-flex items-center gap-2 px-2 py-1 bg-gray-800 rounded mt-2 text-xs font-semibold text-emergency-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-emergency-red animate-pulse"></span> 24/7 Available
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sri Ayyappa Hospital. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Metpally, Telangana.</p>
        </div>
      </div>
    </footer>
  );
}
