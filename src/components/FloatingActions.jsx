import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <a 
        href="https://wa.me/919000353462" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Chat with us
        </span>
      </a>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex">
          <a href="tel:9000353462" className="flex-1 py-3 flex flex-col items-center justify-center gap-1 text-gray-700 hover:text-medical-blue transition-colors">
            <Phone size={20} />
            <span className="text-[10px] font-semibold uppercase tracking-wide">Call Now</span>
          </a>
          <a href="https://wa.me/919000353462" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 flex flex-col items-center justify-center gap-1 text-green-600 bg-green-50 hover:bg-green-100 transition-colors border-x border-gray-100">
            <MessageCircle size={20} />
            <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
          </a>
          <a href="#appointment" className="flex-1 py-3 flex flex-col items-center justify-center gap-1 text-medical-blue hover:bg-blue-50 transition-colors">
            <Calendar size={20} />
            <span className="text-[10px] font-semibold uppercase tracking-wide">Book</span>
          </a>
        </div>
      </div>
    </>
  );
}
