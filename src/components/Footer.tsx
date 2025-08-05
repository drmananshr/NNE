import React from 'react';
import { Mail, Phone, MapPin, Trophy } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-bold">NNE 2026</h3>
            </div>
            <p className="text-red-100 mb-4">
              17th National Numismatic Exhibition - Asia's largest showcase of coins, banknotes, and stamps.
            </p>
            <div className="space-y-2 text-sm text-red-200">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Shikshak Sadan, KG Road, Majestic, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-red-200">
              <li><a href="/tickets" className="hover:text-yellow-400 transition-colors">Book Tickets</a></li>
              <li><a href="/stalls" className="hover:text-yellow-400 transition-colors">Book Stalls</a></li>
              <li><a href="/awards" className="hover:text-yellow-400 transition-colors">NNAP Awards</a></li>
              <li><a href="/academic-sessions" className="hover:text-yellow-400 transition-colors">Academic Sessions</a></li>
            </ul>
          </div>

          {/* Organiser */}
          <div>
            <h3 className="text-lg font-bold mb-4">Organiser</h3>
            <div className="mb-2">
              <a 
                href="https://marudhararts.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-100 font-medium hover:text-yellow-400 transition-colors"
              >
                Marudhar Arts
              </a>
            </div>
            <p className="text-sm text-red-200 mb-4">
              India's leading Auction House, established 1966. Three generations of expertise in numismatics and philately.
            </p>
            <div className="space-y-2 text-sm text-red-200">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>85, Mahatma Gandhi Rd, Bengaluru, Karnataka, INDIA 560001</span>
              </div>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-red-200 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nne2026.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-XX-XXXX-XXXX</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-red-200">
              <li><a href="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-red-200">
              © 2025 17th National Numismatic Exhibition. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-red-200">
                Organised by <a 
                  href="https://marudhararts.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
                >
                  Marudhar Arts
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;