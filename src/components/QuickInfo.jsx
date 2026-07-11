import { Stethoscope, AlertCircle, FileText, PhoneCall } from 'lucide-react';

export default function QuickInfo() {
  const cards = [
    {
      title: 'General Medicine',
      desc: 'Expert diagnosis and holistic treatment.',
      icon: Stethoscope,
      color: 'bg-medical-blue text-white',
      iconColor: 'text-medical-blue bg-white',
    },
    {
      title: 'Emergency Care',
      desc: '24/7 urgent medical assistance.',
      icon: AlertCircle,
      color: 'bg-emergency-red text-white',
      iconColor: 'text-emergency-red bg-white',
    },
    {
      title: 'OP Consultation',
      desc: 'Convenient daily outpatient care.',
      icon: FileText,
      color: 'bg-white border-2 border-medical-blue text-medical-blue',
      iconColor: 'text-white bg-medical-blue',
    },
    {
      title: 'Hospital Contact',
      desc: 'Call us immediately for support.',
      icon: PhoneCall,
      color: 'bg-white shadow-lg text-gray-800 border border-gray-100',
      iconColor: 'text-healthcare-green bg-healthcare-green/10',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className={`p-6 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1 ${card.color}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${card.iconColor}`}>
              <card.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-sm opacity-90">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
