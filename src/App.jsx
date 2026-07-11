import EmergencyBar from './components/EmergencyBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import EmergencyCare from './components/EmergencyCare';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentForm from './components/AppointmentForm';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-medical-blue selection:text-white">
      <EmergencyBar />
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <AboutDoctor />
        <Services />
        <EmergencyCare />
        <WhyChooseUs />
        <AppointmentForm />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
