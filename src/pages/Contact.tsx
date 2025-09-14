import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Contact & Venue</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Find us in the heart of Bengaluru for three days of numismatic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Venue Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-yellow-600 mr-2" />
                Venue Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-red-900 text-lg">Shikshak Sadan</h3>
                  <p className="text-red-700">KG Road, Majestic</p>
                  <p className="text-red-700">Bengaluru, Karnataka, India</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-red-900">Exhibition Hours</p>
                      <p className="text-red-700">9:00 AM - 6:00 PM (All three days)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-red-900">Event Enquiries</p>
                      <p className="text-red-700">+91-9243145999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-red-900">Email</p>
                      <p className="text-red-700">rm@marudhararts.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Getting There</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center">
                    <Train className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">By Metro/Train</h3>
                    <p className="text-red-700">Majestic Metro Station - 5 minutes walk</p>
                    <p className="text-red-700">Bengaluru City Railway Station - 10 minutes walk</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center">
                    <Car className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">By Car</h3>
                    <p className="text-red-700">Limited parking available on-site</p>
                    <p className="text-red-700">Public parking at Majestic bus stand (200m)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center">
                    <Plane className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900">From Airport</h3>
                    <p className="text-red-700">Kempegowda International Airport - 45 minutes by taxi</p>
                    <p className="text-red-700">Airport bus service available to Majestic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Get in Touch</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-red-800 mb-1">Subject</label>
                  <select className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    <option value="">Select enquiry type</option>
                    <option value="tickets">Ticket booking</option>
                    <option value="stalls">Stall booking</option>
                    <option value="awards">NNAP Awards</option>
                    <option value="academic">Academic sessions</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-red-800 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Location Map</h2>
              
              {/* Google Maps Embed */}
              <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0043567892795!2d77.57123831482184!3d12.975926790848987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670eb1c6f7d%3A0x7c6f4d4a5a6a5a5a!2sKG%20Road%2C%20Majestic%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625660000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shikshak Sadan Location"
                />
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/gH8iMu6F82XRYcYJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-900 hover:text-yellow-600 font-medium transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Nearby Amenities */}
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6">Nearby Amenities</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Hotels</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• The Oterra (5-star) - 1.2 km</li>
                    <li>• Hotel Empire International - 800m</li>
                    <li>• FabHotel Prime Residency - 1 km</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Restaurants</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Mavalli Tiffin Rooms (MTR) - 500m</li>
                    <li>• Central Tiffin Room - 300m</li>
                    <li>• Hotel Janatha - 400m</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Shopping</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Chickpet Market - 1 km</li>
                    <li>• Avenue Road - 800m</li>
                    <li>• City Market - 1.5 km</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Information */}
            <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 p-6">
              <h3 className="text-lg font-bold text-red-900 mb-4">Emergency Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-red-700"><strong>Police:</strong> 100</p>
                <p className="text-red-700"><strong>Medical Emergency:</strong> 108</p>
                <p className="text-red-700"><strong>Fire Emergency:</strong> 101</p>
                <p className="text-red-700"><strong>Nearest Hospital:</strong> Victoria Hospital (1.5 km)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;