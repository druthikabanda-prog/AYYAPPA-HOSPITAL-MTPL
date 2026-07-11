import { Award, BriefcaseMedical } from 'lucide-react';

export default function AboutDoctor() {
  return (
    <section id="about-doctor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Image framing */}
              <div className="absolute -inset-4 bg-medical-blue/10 rounded-[2rem] transform -rotate-3 z-0"></div>
              <img 
                src="/assets/doctor.jpg" 
                alt="Dr. P. Rohith Yadav" 
                className="relative z-10 w-full max-w-md mx-auto rounded-[1.5rem] shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet <span className="text-medical-blue">Dr. P. Rohith Yadav</span>
            </h2>
            <p className="text-xl font-medium text-healthcare-green">MD Physician</p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Dr. P. Rohith Yadav is a dedicated medical professional committed to providing patient-focused general medicine consultation, diagnosis, treatment, and ongoing care. With a strong foundation in modern medical practices, he ensures that every patient receives accurate assessments and compassionate support.
            </p>
            
            <div className="bg-light-gray p-6 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BriefcaseMedical className="text-medical-blue" size={20} />
                Professional Experience
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medical-blue"></div>
                  <div>
                    <p className="font-semibold text-gray-900">AIG Hospital</p>
                    <p className="text-sm text-gray-500">Hyderabad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-medical-blue"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Care Hospital</p>
                    <p className="text-sm text-gray-500">Hyderabad</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
