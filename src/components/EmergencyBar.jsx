import { Phone } from 'lucide-react';

export default function EmergencyBar() {
  return (
    <div className="bg-emergency-red text-clean-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
          24/7 Emergency Services Available
        </div>
        <div className="flex gap-4">
          <a href="tel:+919000353462" aria-label="Call emergency number 9000353462" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
            <Phone size={14} /> 9000353462
          </a>
          <a href="tel:+919951385513" aria-label="Call support number 9951385513" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
            <Phone size={14} /> 9951385513
          </a>
        </div>
      </div>
    </div>
  );
}
