import { useState } from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp format message
    const message = `Hello Sri Ayyappa Hospital,\n\nI would like to request an appointment.\n\nPatient Name: ${formData.name}\nPhone Number: ${formData.phone}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nReason for Visit: ${formData.reason}\n\nPlease confirm appointment availability.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919000353462?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          <div className="lg:w-5/12 bg-medical-blue text-white p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Request an Appointment</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Fill out the form to request a consultation with Dr. P. Rohith Yadav. We will confirm your appointment via WhatsApp.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="font-semibold flex items-center gap-2 mb-1">
                  <Calendar size={18} /> Working Hours
                </p>
                <p className="text-sm text-blue-100">Monday - Sunday</p>
                <p className="text-sm text-blue-100">24/7 Emergency Available</p>
              </div>
              <p className="text-xs text-blue-200 mt-4 opacity-80">
                * Appointment requests are subject to confirmation by the hospital based on doctor availability.
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                  <select 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors"
                  >
                    <option value="">Select Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit *</label>
                <textarea 
                  name="reason"
                  required
                  rows="3"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-medical-blue transition-colors"
                  placeholder="Briefly describe your symptoms or reason for consultation"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-healthcare-green text-white py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors shadow-lg flex justify-center items-center gap-2"
              >
                <MessageSquare size={20} /> Request Appointment via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
