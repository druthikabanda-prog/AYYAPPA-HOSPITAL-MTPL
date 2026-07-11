import { servicesData } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-medical-blue">Medical Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            Providing expert diagnosis, treatment, and management for a wide range of medical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-medical-blue/5 text-medical-blue flex items-center justify-center mb-4 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-healthcare-green/10 border border-healthcare-green/20 rounded-xl p-4 text-center text-sm text-healthcare-green font-medium max-w-2xl mx-auto">
          Treatment availability and emergency care depend on clinical assessment and hospital facilities. Contact the hospital for immediate assistance.
        </div>
      </div>
    </section>
  );
}
