import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, CreditCard, CheckCircle } from 'lucide-react';

const TicketBooking = () => {
  const [selectedTickets, setSelectedTickets] = useState({
    single: 0,
    threeDay: 0,
    student: 0,
    family: 0
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequirements: ''
  });

  const ticketTypes = [
    {
      id: 'single',
      name: 'Single Day Pass',
      price: 500,
      description: 'Access to all exhibitions and sessions for one day',
      features: ['Exhibition access', 'Dealer stalls', 'Academic sessions', 'Networking events']
    },
    {
      id: 'threeDay',
      name: 'Three Day Pass',
      price: 1200,
      description: 'Complete access to all three days including special events',
      features: ['All exhibition days', 'Live auction access', 'NNAP Awards ceremony', 'Exclusive preview sessions', 'Welcome & farewell events'],
      popular: true
    },
    {
      id: 'student',
      name: 'Student Pass',
      price: 300,
      description: 'Discounted rate for students with valid ID',
      features: ['Exhibition access (3 days)', 'Academic sessions', 'Student networking events', 'Valid student ID required']
    },
    {
      id: 'family',
      name: 'Family Pack (4 people)',
      price: 3500,
      description: 'Best value for families - includes 4 three-day passes',
      features: ['4 × Three day passes', 'Family seating area', 'Special family activities', 'Children under 12 free']
    }
  ];

  const calculateTotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + (selectedTickets[ticket.id] * ticket.price);
    }, 0);
  };

  const handleTicketChange = (ticketId: string, change: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, prev[ticketId] + change)
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const totalTickets = Object.values(selectedTickets).reduce((sum, count) => sum + count, 0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Book Your Tickets</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Secure your place at the 17th National Numismatic Exhibition
          </p>
          
          {/* Event Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-red-800">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-yellow-600" />
              <span className="font-medium">20-22 February 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-yellow-600" />
              <span className="font-medium">Shikshak Sadan, Bengaluru</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ticket Selection */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Select Tickets</h2>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
            {ticketTypes.map((ticket) => (
              <motion.div
                key={ticket.id}
                className={`bg-white rounded-xl border-2 p-6 transition-all duration-300 ${
                  ticket.popular
                    ? 'border-yellow-400 shadow-lg'
                    : 'border-amber-100 hover:border-yellow-300'
                }`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {ticket.popular && (
                  <div className="inline-block bg-yellow-500 text-red-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-900">{ticket.name}</h3>
                    <p className="text-red-700 mt-1">{ticket.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-900">₹{ticket.price.toLocaleString()}</div>
                    <div className="text-sm text-red-600">per ticket</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {ticket.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-red-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleTicketChange(ticket.id, -1)}
                      className="w-10 h-10 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
                      disabled={selectedTickets[ticket.id] === 0}
                    >
                      -
                    </button>
                    <span className="text-lg font-bold text-red-900 min-w-[2rem] text-center">
                      {selectedTickets[ticket.id]}
                    </span>
                    <button
                      onClick={() => handleTicketChange(ticket.id, 1)}
                      className="w-10 h-10 bg-red-900 text-white rounded-full hover:bg-red-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg font-bold text-red-900">
                    ₹{(selectedTickets[ticket.id] * ticket.price).toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <motion.div 
              className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-red-900 mb-4">Booking Summary</h3>
              
              {totalTickets === 0 ? (
                <p className="text-red-600 text-center py-4">No tickets selected</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {ticketTypes.map((ticket) => {
                      if (selectedTickets[ticket.id] > 0) {
                        return (
                          <div key={ticket.id} className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-red-900">{ticket.name}</div>
                              <div className="text-sm text-red-600">
                                {selectedTickets[ticket.id]} × ₹{ticket.price.toLocaleString()}
                              </div>
                            </div>
                            <div className="font-bold text-red-900">
                              ₹{(selectedTickets[ticket.id] * ticket.price).toLocaleString()}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  
                  <div className="border-t border-red-100 pt-3">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-bold text-red-900">Total</span>
                      <span className="font-bold text-red-900">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-red-600 mt-1">
                      {totalTickets} ticket{totalTickets !== 1 ? 's' : ''}
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Contact Form */}
            {totalTickets > 0 && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg border border-amber-100 p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-red-900 mb-4">Contact Details</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-red-800 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-red-800 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Special Requirements (Optional)</label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Accessibility needs, dietary requirements, etc."
                    />
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Payment</span>
                </button>
                
                <p className="text-xs text-red-600 mt-3 text-center">
                  Secure payment processing. You will receive confirmation via email.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;