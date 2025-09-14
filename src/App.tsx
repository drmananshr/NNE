import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import TicketBooking from './pages/TicketBooking';
import StallBooking from './pages/StallBooking';
import Awards from './pages/Awards';
import AcademicSessions from './pages/AcademicSessions';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { initializeAllData } from './utils/initializeData';

function App() {
  React.useEffect(() => {
    // Initialize database data on app start
    initializeAllData().catch(console.error);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tickets" element={<TicketBooking />} />
            <Route path="/stalls" element={<StallBooking />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/academic-sessions" element={<AcademicSessions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;