import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStalls } from '../hooks/useStalls';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CreditCard, 
  CheckCircle, 
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Phone,
  Mail,
  AlertCircle,
  Info
} from 'lucide-react';

const StallBooking = () => {
  const { stalls: stallsData, loading: stallsLoading, error: stallsError } = useStalls();
  const [selectedStalls, setSelectedStalls] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [floorFilter, setFloorFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('available');
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    specialRequirements: ''
  });

  // Filter stalls based on search and filters
  const filteredStalls = stallsData.filter(stall => {
    const matchesSearch = stall.stallId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stall.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFloor = floorFilter === 'all' || 
                        (floorFilter === 'ac' && stall.category !== 'Non-AC') ||
                        (floorFilter === 'non-ac' && stall.category === 'Non-AC');
    
    const matchesPrice = priceFilter === 'all' ||
                        (priceFilter === 'under-15k' && stall.rent < 15000) ||
                        (priceFilter === '15k-25k' && stall.rent >= 15000 && stall.rent <= 25000) ||
                        (priceFilter === 'above-25k' && stall.rent > 25000);
    
    const matchesStatus = statusFilter === 'all' || stall.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesFloor && matchesPrice && matchesStatus;
  });

  const handleStallSelect = (stallId: string) => {
    const stall = stallsData.find(s => s.stallId === stallId);
    if (stall?.status !== 'Available') return;
    
    setSelectedStalls(prev => 
      prev.includes(stallId) 
        ? prev.filter(id => id !== stallId)
        : [...prev, stallId]
    );
  };

  const calculateTotal = () => {
    return selectedStalls.reduce((total, stallId) => {
      const stall = stallsData.find(s => s.stallId === stallId);
      return total + (stall?.rent || 0);
    }, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Booked': return 'bg-red-100 text-red-800';
      case 'Reserved': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AC Prime': return 'bg-purple-100 text-purple-800';
      case 'AC Standard': return 'bg-blue-100 text-blue-800';
      case 'Non-AC': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const availableStalls = stallsData.filter(stall => stall.status === 'Available').length;
  const occupiedStalls = stallsData.length - availableStalls;

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
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Book Your Stall</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Secure your prime location at the 17th National Numismatic Exhibition
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

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{availableStalls}</div>
              <div className="text-sm text-red-700">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{occupiedStalls}</div>
              <div className="text-sm text-red-700">Occupied</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-900">{stallsData.length}</div>
              <div className="text-sm text-red-700">Total Stalls</div>
            </div>
          </div>
        </motion.div>

        {/* Floor Plans - Collapsible */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
            <button
              onClick={() => setShowFloorPlan(!showFloorPlan)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-red-600" />
                <h2 className="text-xl font-bold text-red-900">Floor Plans</h2>
                <span className="text-sm text-red-600">
                  {showFloorPlan ? 'Click to hide' : 'Click to view layout'}
                </span>
              </div>
              {showFloorPlan ? (
                <ChevronUp className="h-5 w-5 text-red-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-red-600" />
              )}
            </button>
            
            {showFloorPlan && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-4">AC Hall Floor Plan</h3>
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setExpandedImage('ac')}
                    >
                      <img
                        src="https://collectndealdevcdn.marucoins.in/uploads/event/23-108527.jpg"
                        alt="AC Hall Floor Plan"
                        className="w-full h-64 object-contain rounded-lg border border-red-200 group-hover:shadow-lg transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-red-900 transition-opacity duration-300">
                          Click to expand
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-4">Non-AC Hall Floor Plan</h3>
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setExpandedImage('non-ac')}
                    >
                      <img
                        src="https://collectndealdevcdn.marucoins.in/uploads/event/23-799475.jpg"
                        alt="Non-AC Hall Floor Plan"
                        className="w-full h-64 object-contain rounded-lg border border-red-200 group-hover:shadow-lg transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-red-900 transition-opacity duration-300">
                          Click to expand
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Floor Plan Modal */}
        <AnimatePresence>
          {expandedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                className="relative max-w-7xl max-h-[90vh] overflow-hidden rounded-2xl bg-white"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={expandedImage === 'ac' 
                      ? "https://collectndealdevcdn.marucoins.in/uploads/event/23-108527.jpg"
                      : "https://collectndealdevcdn.marucoins.in/uploads/event/23-799475.jpg"
                    }
                    alt={expandedImage === 'ac' ? "AC Hall Floor Plan - Full Size" : "Non-AC Hall Floor Plan - Full Size"}
                    className="w-full h-full object-contain max-h-[85vh]"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <h3 className="font-bold text-red-900">
                      {expandedImage === 'ac' ? 'AC Hall Floor Plan' : 'Non-AC Hall Floor Plan'}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-xl font-bold"
                  >
                    ×
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm text-red-700">Click outside to close • Use browser zoom for detailed view</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        {stallsLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-900"></div>
            <p className="mt-2 text-red-700">Loading stalls...</p>
          </div>
        )}

        {/* Error State */}
        {stallsError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">Error loading stalls: {stallsError}</p>
          </div>
        )}

        {/* Search and Filters */}
        {!stallsLoading && !stallsError && (
          <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400" />
                <input
                  type="text"
                  placeholder="Search stalls..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Floor Filter */}
              <select
                value={floorFilter}
                onChange={(e) => setFloorFilter(e.target.value)}
                className="px-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Floors</option>
                <option value="ac">AC Stalls</option>
                <option value="non-ac">Non-AC Stalls</option>
              </select>

              {/* Price Filter */}
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Prices</option>
                <option value="under-15k">Under ₹15,000</option>
                <option value="15k-25k">₹15,000 - ₹25,000</option>
                <option value="above-25k">Above ₹25,000</option>
              </select>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="booked">Booked</option>
                <option value="reserved">Reserved</option>
              </select>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFloorFilter('all');
                  setPriceFilter('all');
                  setStatusFilter('available');
                }}
                className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </motion.section>
        )}

        {!stallsLoading && !stallsError && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Stalls List */}
          <div className="xl:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Available Stalls</h2>
            
            {filteredStalls.map((stall) => (
              <motion.div
                key={stall.stallId}
                className={`bg-white rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer ${
                  selectedStalls.includes(stall.stallId)
                    ? 'border-yellow-400 shadow-lg'
                    : stall.status === 'Available'
                    ? 'border-amber-100 hover:border-yellow-300 hover:shadow-md'
                    : 'border-gray-200 opacity-75 cursor-not-allowed'
                }`}
                onClick={() => handleStallSelect(stall.stallId)}
                whileHover={stall.status === 'Available' ? { scale: 1.02, y: -2 } : {}}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-red-900">{stall.stallId}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(stall.category)}`}>
                        {stall.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(stall.status)}`}>
                        {stall.status}
                      </span>
                    </div>
                    
                    {stall.dealer && (
                      <div className="text-red-700 mb-2">
                        <span className="font-medium">{stall.dealer}</span>
                        <span className="text-red-600"> • {stall.city}, {stall.state}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-900">₹{stall.rent.toLocaleString()}</div>
                    <div className="text-sm text-red-600">3 days (incl. GST)</div>
                  </div>
                </div>
                
                <p className="text-red-700 mb-4">{stall.inclusion}</p>
                
                {stall.status === 'Available' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {selectedStalls.includes(stall.stallId) ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-red-300 rounded-full"></div>
                      )}
                      <span className="text-red-800 font-medium">
                        {selectedStalls.includes(stall.stallId) ? 'Selected' : 'Click to select'}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Booking Summary & Form */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg border border-amber-100 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-red-900 mb-4">Booking Summary</h3>
              
              {selectedStalls.length === 0 ? (
                <p className="text-red-600 text-center py-4">No stalls selected</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {selectedStalls.map((stallId) => {
                      const stall = stallsData.find(s => s.stallId === stallId);
                      if (!stall) return null;
                      return (
                        <div key={stallId} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-red-900">{stall.stallId}</div>
                            <div className="text-sm text-red-600">{stall.category}</div>
                          </div>
                          <div className="font-bold text-red-900">
                            ₹{stall.rent.toLocaleString()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="border-t border-red-100 pt-3">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-bold text-red-900">Total</span>
                      <span className="font-bold text-red-900">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-red-600 mt-1">
                      {selectedStalls.length} stall{selectedStalls.length !== 1 ? 's' : ''} selected
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Payment Terms */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                Payment Terms
              </h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 50% advance payment to reserve stall</li>
                <li>• Full payment due by 6th January 2026</li>
                <li>• All prices include GST</li>
                <li>• Refund policy as per terms & conditions</li>
              </ul>
            </motion.div>

            {/* Contact Form */}
            {selectedStalls.length > 0 && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg border border-amber-100 p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-red-900 mb-4">Complete Your Booking</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Company/Business Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-red-800 mb-1">Business Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={2}
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
                      rows={2}
                      className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Additional tables, electrical requirements, etc."
                    />
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Selected Stalls:</strong> {selectedStalls.join(', ')}
                    </p>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Payment Gateway</span>
                </button>
                
                <p className="text-xs text-red-600 mt-3 text-center">
                  Secure payment processing. You will receive booking confirmation via email.
                </p>
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-red-900 mb-3">Need Help Choosing?</h3>
              <p className="text-red-700 mb-4">
                Our team is here to help you select the perfect stall for your needs and budget.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-red-800">+91-9243145999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-red-800">rm@marudhararts.com</span>
                </div>
              </div>
            </motion.div>

            {/* Booking Guidelines */}
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-red-900 mb-3">Booking Guidelines</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Setup: 8:00 AM - 9:00 AM daily</li>
                <li>• Exhibition: 9:00 AM - 6:00 PM daily</li>
                <li>• Breakdown: 6:00 PM - 7:00 PM (final day)</li>
                <li>• Insurance recommended for valuable items</li>
                <li>• Electricity and WiFi included</li>
              </ul>
            </motion.div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default StallBooking;