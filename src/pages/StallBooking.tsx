import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Zap, Crown, CheckCircle, Calculator, Mail, MapPin, Info, Star } from 'lucide-react';

const StallBooking = () => {
  const [selectedStall, setSelectedStall] = useState<string>('');
  const [selectedFloor, setSelectedFloor] = useState<'premium' | 'basic'>('premium');
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    specialRequirements: '',
    powerRequirements: false,
    internetRequirements: false
  });

  const stallTypes = [
    {
      id: 'basic',
      name: 'Basic Stall',
      price: 10000,
      size: '3m × 2m',
      description: 'Perfect for small dealers and individual collectors',
      features: [
        'Table and two chairs',
        'Basic lighting',
        'Shared power outlet',
        'Standard location',
        'Exhibition signage'
      ],
      icon: Store,
      color: 'yellow',
      available: 45,
      total: 50
    },
    {
      id: 'premium',
      name: 'Premium Stall',
      price: 18000,
      size: '4m × 3m',
      description: 'Enhanced space for established dealers',
      features: [
        'Larger display area',
        'Professional lighting',
        'Dedicated power supply',
        'Prime location',
        'Custom signage',
        'Secure storage cabinet',
        'Carpeted flooring'
      ],
      icon: Users,
      popular: true,
      color: 'green',
      available: 18,
      total: 25
    },
    {
      id: 'deluxe',
      name: 'Deluxe Stall',
      price: 25000,
      size: '5m × 4m',
      description: 'Maximum visibility and space for major dealers',
      features: [
        'Corner location advantage',
        'Professional display cases',
        'Premium lighting setup',
        'Multiple power outlets',
        'Wi-Fi connectivity',
        'Locked storage room',
        'Professional backdrop',
        'VIP parking space'
      ],
      icon: Zap,
      color: 'blue',
      available: 8,
      total: 12
    },
    {
      id: 'platinum',
      name: 'Platinum Showcase',
      price: 40000,
      size: '6m × 5m',
      description: 'Ultimate premium experience for exclusive collections',
      features: [
        'Prime entrance location',
        'Climate-controlled display',
        'Museum-quality lighting',
        'Full electrical setup',
        'Dedicated internet line',
        'Private meeting area',
        'Security guard assigned',
        'Complimentary refreshments',
        'Featured in exhibition guide'
      ],
      icon: Crown,
      exclusive: true,
      color: 'purple',
      available: 3,
      total: 6
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const selectedStallData = stallTypes.find(stall => stall.id === selectedStall);

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-500 border-yellow-600',
      green: 'bg-green-500 border-green-600',
      blue: 'bg-blue-500 border-blue-600',
      purple: 'bg-purple-500 border-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.yellow;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Interactive Stall Booking</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Choose your perfect location using our floor plans
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            <Store className="h-5 w-5" />
            <span className="font-medium">Click on the floor plan to explore available stalls</span>
          </div>
        </motion.div>

        {/* Stall Type Overview */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-red-900 mb-6 text-center">Available Stall Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stallTypes.map((stall) => {
              const IconComponent = stall.icon;
              const availabilityPercentage = (stall.available / stall.total) * 100;
              
              return (
                <motion.div
                  key={stall.id}
                  className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedStall === stall.id
                      ? 'border-yellow-400 shadow-lg transform scale-105'
                      : 'border-amber-100 hover:border-yellow-300'
                  }`}
                  onClick={() => setSelectedStall(stall.id)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {(stall.popular || stall.exclusive) && (
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${
                      stall.exclusive 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-yellow-500 text-red-900'
                    }`}>
                      {stall.exclusive ? 'Exclusive' : 'Most Popular'}
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900">{stall.name}</h3>
                      <p className="text-sm text-red-600">{stall.size}</p>
                    </div>
                  </div>
                  
                  <div className="text-right mb-4">
                    <div className="text-xl font-bold text-red-900">₹{stall.price.toLocaleString()}</div>
                    <div className="text-xs text-red-600">for 3 days</div>
                  </div>
                  
                  {/* Availability Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-red-700">Available</span>
                      <span className="text-red-900 font-medium">{stall.available}/{stall.total}</span>
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          availabilityPercentage > 50 ? 'bg-green-500' : 
                          availabilityPercentage > 25 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${availabilityPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {selectedStall === stall.id && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800 font-medium">✓ Selected for booking</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Interactive Floor Plans */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-red-900 mb-4">Floor Plans</h2>
              <p className="text-lg text-red-700 mb-6">
                Explore the venue layout and choose your ideal stall location
              </p>
              
              {/* Floor Plan Tabs */}
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setSelectedFloor('premium')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedFloor === 'premium'
                      ? 'bg-red-900 text-white shadow-lg'
                      : 'bg-red-100 text-red-900 hover:bg-red-200'
                  }`}
                >
                  Premium, Deluxe & Platinum Stalls
                </button>
                <button
                  onClick={() => setSelectedFloor('basic')}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedFloor === 'basic'
                      ? 'bg-red-900 text-white shadow-lg'
                      : 'bg-red-100 text-red-900 hover:bg-red-200'
                  }`}
                >
                  Basic Stalls
                </button>
              </div>
            </div>

            {/* Floor Plan Display */}
            <div className="space-y-8">
              {selectedFloor === 'premium' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">Premium, Deluxe & Platinum Layout</h3>
                    
                    {/* Interactive Floor Plan */}
                    <div className="relative">
                      <img
                        src="https://marudhararts.com/uploads/nne/17/Floor-plan-17-105303.jpg"
                        alt="Premium, Deluxe and Platinum Stalls Floor Plan"
                        className="w-full h-auto rounded-lg shadow-md border border-amber-200"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="text-center py-8 text-red-600">Floor plan image temporarily unavailable</div>';
                          }
                        }}
                      />
                      
                      {/* Overlay Points */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Example interactive points - these would be positioned based on actual stall locations */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Platinum Stall - Prime Location"></div>
                        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Deluxe Stall - Corner Position"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Premium Stall - High Traffic Area"></div>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-red-800">Platinum Stalls (₹40,000)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-red-800">Deluxe Stalls (₹25,000)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-red-800">Premium Stalls (₹18,000)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedFloor === 'basic' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">Basic Stalls Layout</h3>
                    
                    <div className="relative">
                      <img
                        src="https://marudhararts.com/uploads/nne/17/FloorPlan-image-17-105303.jpg"
                        alt="Basic Stalls Floor Plan"
                        className="w-full h-auto rounded-lg shadow-md border border-amber-200"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="text-center py-8 text-red-600">Floor plan image temporarily unavailable</div>';
                          }
                        }}
                      />
                      
                      {/* Overlay Points for Basic Stalls */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-yellow-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Basic Stall Available"></div>
                        <div className="absolute top-1/2 center w-3 h-3 bg-yellow-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Basic Stall Available"></div>
                        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-yellow-500 rounded-full animate-pulse cursor-pointer pointer-events-auto" 
                             title="Basic Stall Available"></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-red-800">Basic Stalls (₹10,000)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Location Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h4 className="font-bold text-blue-900">Entrance Area</h4>
                </div>
                <p className="text-sm text-blue-800">High visibility as visitors enter. Perfect for first impressions and maximum foot traffic.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <h4 className="font-bold text-green-900">Central Hub</h4>
                </div>
                <p className="text-sm text-green-800">Located in the main circulation area. Ideal for networking and continuous visitor flow.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  <h4 className="font-bold text-purple-900">Corner Positions</h4>
                </div>
                <p className="text-sm text-purple-800">Premium corner locations with dual-side access and enhanced visibility from multiple angles.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Booking Form */}
        {selectedStall && selectedStallData && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-red-900 mb-4">Booking Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-red-900">{selectedStallData.name}</div>
                      <div className="text-sm text-red-600">{selectedStallData.size}</div>
                      <div className="text-xs text-green-700 mt-1">
                        {selectedStallData.available} of {selectedStallData.total} available
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-900">₹{selectedStallData.price.toLocaleString()}</div>
                      <div className="text-xs text-red-600">3 days</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-semibold text-red-900 text-sm mb-2">Included Features:</h4>
                    <ul className="text-xs text-red-700 space-y-1">
                      {selectedStallData.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-1">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {selectedStallData.features.length > 3 && (
                        <li className="text-blue-600">+ {selectedStallData.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-red-100 pt-4">
                  <div className="flex justify-between items-center text-lg mb-4">
                    <span className="font-bold text-red-900">Total</span>
                    <span className="font-bold text-red-900">₹{selectedStallData.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300">
                      Reserve Now (50%)
                    </button>
                    <button className="w-full bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-all duration-300">
                      Pay Full Amount
                    </button>
                  </div>
                  
                  <p className="text-xs text-red-600 mt-3 text-center">
                    Reserve with 50% payment. Balance due by 6th January 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6">Complete Your Booking</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-2">Business/Organisation Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-red-800 mb-2">Business Type *</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="dealer">Coin/Note Dealer</option>
                      <option value="auction-house">Auction House</option>
                      <option value="collector">Private Collector</option>
                      <option value="institution">Institution/Museum</option>
                      <option value="publisher">Publisher</option>
                      <option value="service-provider">Service Provider</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-red-800 mb-2">Special Requirements</label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Display requirements, accessibility needs, preferred location, etc."
                    />
                  </div>
                </div>
                
                {/* Additional Services */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-red-900 mb-4">Additional Services (Optional)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="powerRequirements"
                        checked={formData.powerRequirements}
                        onChange={handleInputChange}
                        className="text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="text-red-800">Extra Power Outlets (+₹500)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="internetRequirements"
                        checked={formData.internetRequirements}
                        onChange={handleInputChange}
                        className="text-yellow-600 focus:ring-yellow-500"
                      />
                      <span className="text-red-800">Dedicated Internet (+₹800)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div 
          className="mt-12 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Need Help Choosing?</h3>
            <p className="text-red-700 mb-6">
              Our team is here to help you select the perfect stall for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex items-center space-x-2 text-red-800">
                <Mail className="h-5 w-5" />
                <span>stalls@nne2026.com</span>
              </div>
              <div className="flex items-center space-x-2 text-red-800">
                <Info className="h-5 w-5" />
                <span>+91-XX-XXXX-XXXX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StallBooking;