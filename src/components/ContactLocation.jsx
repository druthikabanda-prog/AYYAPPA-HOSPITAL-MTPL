import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact & <span className="text-medical-blue">Location</span>
          </h2>
          <p className="text-lg text-gray-600">
            We are centrally located in Metpally. Visit us or call for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sri Ayyappa Hospital</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-medical-blue/10 p-3 rounded-xl text-medical-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Beside Bank of Baroda,<br/>
                      Siri Children's Hospital,<br/>
                      Nizamabad Road, Metpally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-medical-blue/10 p-3 rounded-xl text-medical-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Emergency & Reception</h4>
                    <div className="space-y-2 mt-2">
                      <a href="tel:+919000353462" className="flex items-center gap-2 text-medical-blue font-medium hover:underline">
                        9000353462
                      </a>
                      <a href="tel:+919951385513" className="flex items-center gap-2 text-medical-blue font-medium hover:underline">
                        9951385513
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                <a href="tel:+919000353462" className="bg-medical-blue text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors shadow-md">
                  <Phone size={18} /> Call Hospital
                </a>
                <a href="https://wa.me/919000353462" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-green-600 transition-colors shadow-md">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200 min-h-[400px] relative flex items-center justify-center">
            {/* 
              TODO: Insert Verified Google Maps Embed URL below.
              For now, this is a placeholder map component indicating where the embed goes.
            */}
            <iframe 
              src="https://maps.google.com/maps?q=Sri%20Ayyappa%20Hospital%20Metpally&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Ayyappa Hospital Location"
            ></iframe>
            <div className="absolute top-4 right-4 z-20">
              <a href="https://maps.google.com/maps?q=Sri%20Ayyappa%20Hospital%20Metpally" target="_blank" rel="noopener noreferrer" className="bg-white text-medical-blue font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-50 flex items-center gap-2">
                <MapPin size={18} /> Open in Google Maps
              </a>
            </div>
            <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
