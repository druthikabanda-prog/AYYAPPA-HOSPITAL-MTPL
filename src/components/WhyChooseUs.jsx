import { HeartHandshake, Stethoscope, Clock, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Patient-Focused Consultation',
      desc: 'We prioritize listening to you and designing personalized treatment plans based on comprehensive diagnosis.',
      icon: HeartHandshake,
    },
    {
      title: 'Accessible Medical Care',
      desc: 'Quality healthcare services provided with transparency, compassion, and professionalism.',
      icon: Stethoscope,
    },
    {
      title: 'Emergency Support',
      desc: 'Ready for the unexpected with 24/7 availability for critical cases like snake bites and poisoning.',
      icon: Clock,
    },
    {
      title: 'Convenient Local Care',
      desc: 'Expert medical consultation right here in Metpally, saving you time and travel for routine and urgent care.',
      icon: MapPin,
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-medical-blue">Sri Ayyappa Hospital</span>
          </h2>
          <p className="text-lg text-gray-600">
            Dedicated to bringing comprehensive, trustworthy, and expert healthcare to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-medical-blue/5 rounded-2xl flex items-center justify-center text-medical-blue mb-6 group-hover:bg-medical-blue group-hover:text-white transition-all transform group-hover:-translate-y-2">
                <benefit.icon size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
