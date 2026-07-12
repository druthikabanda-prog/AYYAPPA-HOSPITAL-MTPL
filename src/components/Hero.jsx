import { Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-medical-blue/5 to-healthcare-green/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-medical-blue/10 text-medical-blue font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-medical-blue mr-2"></span>
              Trusted Medical Care in Metpally
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Comprehensive <span className="text-medical-blue">Medical Care,</span><br/> Close to Home.
            </h2>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Professional consultation, diagnosis, treatment, and emergency medical support focused on accessible and responsible patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#appointment" aria-label="Book an appointment with Dr. P. Rohith Yadav" className="inline-flex justify-center items-center gap-2 bg-medical-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Calendar size={20} /> Book Appointment
              </a>
              <a href="tel:+919000353462" aria-label="Call Sri Ayyappa Hospital" className="inline-flex justify-center items-center gap-2 bg-white text-medical-blue border-2 border-medical-blue px-8 py-4 rounded-full font-semibold hover:bg-medical-blue/5 transition-all">
                <Phone size={20} /> Call Hospital
              </a>
            </div>
            
            <div className="flex items-center gap-3 pt-4 text-sm font-medium text-gray-600">
              <div className="w-10 h-10 rounded-full bg-emergency-red/10 flex items-center justify-center">
                <span className="animate-pulse w-3 h-3 bg-emergency-red rounded-full"></span>
              </div>
              <p>24/7 Emergency Services Available</p>
            </div>
          </div>

          {/* Right Content - Doctor Portrait */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-2 scale-105 shadow-xl -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gray-100 max-w-md w-full">
              {/* Doctor Image - expects doctor.jpg in public/assets folder */}
              <img 
                src="/assets/doctor.jpg" 
                alt="Dr. P. Rohith Yadav" 
                className="w-full h-auto object-cover object-top"
              />
              
              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 transform transition-transform hover:-translate-y-1">
                <h3 className="font-bold text-gray-900 text-lg">Dr. P. Rohith Yadav</h3>
                <p className="text-medical-blue font-medium text-sm">MD Physician</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
