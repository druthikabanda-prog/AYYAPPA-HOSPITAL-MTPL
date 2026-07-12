import { AlertCircle, Phone, Clock, Activity, ShieldAlert } from 'lucide-react';

export default function EmergencyCare() {
  return (
    <section id="emergency-care" className="py-20 bg-emergency-red text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Emergency Services
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Emergency Medical Support When Every Minute Matters
            </h2>
            
            <p className="text-red-100 text-lg max-w-lg">
              Immediate medical attention, critical observation, and urgent interventions available 24 hours a day, 7 days a week.
            </p>
            
            <div className="pt-4">
              <a href="tel:+919000353462" aria-label="Call Sri Ayyappa Hospital emergency line" className="inline-flex justify-center items-center gap-2 bg-white text-emergency-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Phone size={24} /> Call Emergency Now
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <Clock className="mb-4 text-white" size={32} />
                <h3 className="font-bold text-xl mb-2">24/7 Services</h3>
                <p className="text-red-100 text-sm">Round-the-clock medical staff ready for any urgent healthcare needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <ShieldAlert className="mb-4 text-white" size={32} />
                <h3 className="font-bold text-xl mb-2">Snake Bite Care</h3>
                <p className="text-red-100 text-sm">Immediate anti-venom treatment and intensive monitoring.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <AlertCircle className="mb-4 text-white" size={32} />
                <h3 className="font-bold text-xl mb-2">Poisoning Cases</h3>
                <p className="text-red-100 text-sm">Rapid intervention and specialized care for all poisoning cases.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <Activity className="mb-4 text-white" size={32} />
                <h3 className="font-bold text-xl mb-2">Urgent Assessment</h3>
                <p className="text-red-100 text-sm">Fast clinical evaluation for critical conditions like fits and paralysis.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
