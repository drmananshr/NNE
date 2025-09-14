import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Users, MapPin, Info, Star, CheckCircle, Search, Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const StallBooking = () => {
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [selectedStall, setSelectedStall] = useState<string>('');
  const [selectedFloor, setSelectedFloor] = useState<'ac' | 'nonac'>('ac');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available' | 'booked' | 'reserved'>('all');
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

  // Real stall data from the provided table
  const stallsData = [
    // AC Prime Stalls
    { id: 'AC Prime 1', category: 'AC Prime', inclusion: '5 Tables (1Table 5 feet Length & 4 Tables 4 Feet Length) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 39500, participant: 'Anuj Mahendroo', city: 'New Delhi', state: 'Delhi', country: 'India', status: 'Reserved' },
    { id: 'AC Prime 2', category: 'AC Prime', inclusion: '3 Tables (5 feet Length) + 3 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 39000, participant: 'Girish J Veera', city: 'Mumbai', state: 'Maharashtra', country: 'India', status: 'Booked' },
    
    // AC Stalls
    { id: 'AC-01', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 26000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-02', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-03', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-04', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-05', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 26000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-06', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-07', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-08', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 26000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-09', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 21500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-10', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-11', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-12', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-13', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-14', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-15', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-16', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 21500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-17', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 21000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-18', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-19', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-20', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-21', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-22', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-23', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-24', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 21000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-25', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-26', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-27', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-28', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-29', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-30', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-31', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-32', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-33', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-34', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-35', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-36', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-37', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-38', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-39', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14750, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-40', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-41', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-42', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-43', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-44', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-45', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-46', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-47', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-48', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-49', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-50', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-51', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-52', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-53', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-54', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-55', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-56', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-57', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-58', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-59', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-60', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-61', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-62', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-63', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-64', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-65', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-66', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17700, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-67', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-68', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-69', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 22800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-70', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-71', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 23800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-72', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 22800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-73', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 20800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-74', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 20800, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-75', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-76', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 19500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-77', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 18500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'AC-78', category: 'AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 18500, participant: '', city: '', state: '', country: '', status: 'Available' },
    
    // Non-AC Stalls
    { id: 'Non AC - A', category: 'Non-AC Premium', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 25000, participant: 'Marudhar Arts', city: 'Bangalore', state: 'Karnataka', country: 'India', status: 'Reserved' },
    { id: 'Non AC - B', category: 'Non-AC Standard', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - C', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - D', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - E', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 14500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - F', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 15500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - G', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 12000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - H', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 13500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - I', category: 'Non-AC Standard', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 12000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - J', category: 'Non-AC Standard', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 16000, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - K', category: 'Non-AC Standard', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 17500, participant: '', city: '', state: '', country: '', status: 'Available' },
    { id: 'Non AC - L', category: 'Non-AC Premium', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', price: 25000, participant: '', city: '', state: '', country: '', status: 'Available' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Filter stalls based on selected floor
  const filteredStalls = stallsData.filter(stall => {
    const matchesFloor = selectedFloor === 'ac' ? stall.category.includes('AC') : stall.category.includes('Non-AC');
    const matchesSearch = stall.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stall.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && stall.price < 15000) ||
                        (priceFilter === 'medium' && stall.price >= 15000 && stall.price < 25000) ||
                        (priceFilter === 'high' && stall.price >= 25000);
    const matchesStatus = statusFilter === 'all' || stall.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesFloor && matchesSearch && matchesPrice && matchesStatus;
  });

  const selectedStallData = stallsData.find(stall => stall.id === selectedStall);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available': return 'bg-green-100 text-green-800 border-green-200';
      case 'booked': return 'bg-red-100 text-red-800 border-red-200';
      case 'reserved': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('Prime')) return 'bg-purple-500';
    if (category.includes('AC')) return 'bg-blue-500';
    return 'bg-green-500';
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
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Stall Booking</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Choose from our available stalls with detailed pricing and inclusions
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            <Store className="h-5 w-5" />
            <span className="font-medium">Real-time availability • Individual pricing</span>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Floor Selection */}
              <div>
                <label className="block text-sm font-medium text-red-800 mb-2">Floor Type</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedFloor('ac')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedFloor === 'ac'
                        ? 'bg-red-900 text-white shadow-lg'
                        : 'bg-red-100 text-red-900 hover:bg-red-200'
                    }`}
                  >
                    AC Stalls
                  </button>
                  <button
                    onClick={() => setSelectedFloor('nonac')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedFloor === 'nonac'
                        ? 'bg-red-900 text-white shadow-lg'
                        : 'bg-red-100 text-red-900 hover:bg-red-200'
                    }`}
                  >
                    Non-AC
                  </button>
                </div>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-red-800 mb-2">Search Stalls</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400" />
                  <input
                    type="text"
                    placeholder="Search by stall ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-red-800 mb-2">Price Range</label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value as any)}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under ₹15,000</option>
                  <option value="medium">₹15,000 - ₹25,000</option>
                  <option value="high">Above ₹25,000</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-red-800 mb-2">Availability</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="w-full px-3 py-2 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">All Status</option>
                  <option value="available">Available</option>
                  <option value="booked">Booked</option>
                  <option value="reserved">Reserved</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-sm text-red-700">
                  <div className="font-medium">{filteredStalls.length} stalls found</div>
                  <div>{filteredStalls.filter(s => s.status === 'Available').length} available</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Floor Plans */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
            {/* Collapsible Header */}
            <button
              onClick={() => setIsFloorPlanOpen(!isFloorPlanOpen)}
              className="w-full p-6 text-left hover:bg-amber-50 transition-colors duration-200 flex items-center justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-yellow-600" />
                  Floor Plans
                </h2>
                <p className="text-red-700">
                  {isFloorPlanOpen ? 'Click to hide' : 'Click to view'} venue layout and stall locations
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-red-600 font-medium">
                  {isFloorPlanOpen ? 'Hide Plans' : 'View Plans'}
                </span>
                {isFloorPlanOpen ? (
                  <ChevronUp className="h-5 w-5 text-red-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-600" />
                )}
              </div>
            </button>

            {/* Collapsible Content */}
            <motion.div
              initial={false}
              animate={{
                height: isFloorPlanOpen ? 'auto' : 0,
                opacity: isFloorPlanOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-8 pt-0 space-y-8">
                {selectedFloor === 'ac' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                      <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">AC Stalls Layout</h3>
                      
                      <div className="relative">
                        <img
                          src="https://marudhararts.com/uploads/nne/17/Floor-plan-17-105303.jpg"
                          alt="AC Stalls Floor Plan"
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
                      </div>
                      
                      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-purple-500 rounded"></div>
                          <span className="text-red-800">AC Prime Stalls (₹39,000+)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <span className="text-red-800">AC Standard Stalls (₹13,000 - ₹26,000)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedFloor === 'nonac' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                      <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">Non-AC Stalls Layout</h3>
                      
                      <div className="relative">
                        <img
                          src="https://marudhararts.com/uploads/nne/17/FloorPlan-image-17-105303.jpg"
                          alt="Non-AC Stalls Floor Plan"
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
                      </div>
                      
                      <div className="mt-6 flex justify-center">
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <span className="text-red-800">Non-AC Stalls (₹12,000 - ₹25,000)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stalls Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Stalls List */}
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Available Stalls</h2>
            
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
              {filteredStalls.map((stall) => (
                <motion.div
                  key={stall.id}
                  className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedStall === stall.id
                      ? 'border-yellow-400 shadow-lg transform scale-[1.02]'
                      : 'border-amber-100 hover:border-yellow-300'
                  } ${stall.status !== 'Available' ? 'opacity-75' : ''}`}
                  onClick={() => stall.status === 'Available' && setSelectedStall(stall.id)}
                  whileHover={stall.status === 'Available' ? { scale: 1.02, y: -2 } : {}}
                  layout
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 ${getCategoryColor(stall.category)} rounded-full`}></div>
                        <h3 className="text-xl font-bold text-red-900">{stall.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(stall.status)}`}>
                          {stall.status}
                        </span>
                      </div>
                      <p className="text-sm text-red-600 mb-2">{stall.category}</p>
                      {stall.participant && (
                        <p className="text-sm text-blue-700 font-medium">
                          {stall.participant} • {stall.city}, {stall.state}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-900">₹{stall.price.toLocaleString()}</div>
                      <div className="text-sm text-red-600">3 days (incl. GST)</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-red-700 mb-4">
                    <strong>Includes:</strong> {stall.inclusion}
                  </div>
                  
                  {selectedStall === stall.id && stall.status === 'Available' && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800 font-medium flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Selected for booking
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Summary & Form */}
          <div className="space-y-6">
            {selectedStallData && selectedStallData.status === 'Available' ? (
              <div className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4">Booking Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-red-900">{selectedStallData.id}</div>
                        <div className="text-sm text-red-600">{selectedStallData.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-900">₹{selectedStallData.price.toLocaleString()}</div>
                        <div className="text-xs text-red-600">3 days (incl. GST)</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-red-900 text-sm mb-2">Included:</h4>
                      <p className="text-xs text-red-700">{selectedStallData.inclusion}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-red-100 pt-4">
                    <div className="flex justify-between items-center text-lg mb-4">
                      <span className="font-bold text-red-900">Total</span>
                      <span className="font-bold text-red-900">₹{selectedStallData.price.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white py-3 px-6 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300">
                        Reserve with 50% Payment
                      </button>
                      <button className="w-full bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-all duration-300">
                        Pay Full Amount
                      </button>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-blue-800 text-center">
                        <strong>Payment Terms:</strong> Reserve with 50% payment. Balance due by 6th January 2026.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-6 mt-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4">Complete Your Booking</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
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
                      
                      <div>
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
                      
                      <div>
                        <label className="block text-sm font-medium text-red-800 mb-2">Special Requirements</label>
                        <textarea
                          name="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Display requirements, accessibility needs, etc."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-red-100">
                    <div className="flex items-center justify-between text-sm text-red-700 mb-4">
                      <span>Selected Stall:</span>
                      <span className="font-bold">{selectedStallData.id}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-red-900 py-3 px-6 rounded-lg font-bold hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 shadow-lg">
                      Proceed to Payment Gateway
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8 text-center">
                <Store className="h-16 w-16 text-red-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-900 mb-2">Select a Stall</h3>
                <p className="text-red-700">
                  Choose an available stall from the list to see booking details and complete your reservation.
                </p>
                
                <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                  <h4 className="font-bold text-red-900 mb-2">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-700">{filteredStalls.filter(s => s.status === 'Available').length}</div>
                      <div className="text-red-600">Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-700">{filteredStalls.filter(s => s.status !== 'Available').length}</div>
                      <div className="text-red-600">Occupied</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <motion.section 
          className="mt-12 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Need Help Choosing?</h3>
              <p className="text-red-700 mb-6">
                Our team is here to help you select the perfect stall for your needs and budget.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-2 text-red-800">
                  <Info className="h-5 w-5" />
                  <span>stalls@nne2026.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2 text-red-800">
                  <Info className="h-5 w-5" />
                  <span>+91-XX-XXXX-XXXX</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-red-200">
              <h4 className="font-bold text-red-900 mb-4">Booking Guidelines</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>50% advance payment secures your stall</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Balance payment due by 6th January 2026</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>All prices include GST and basic amenities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Setup time: 8:00 AM daily</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
        
        {/* Additional Information */}
        <motion.section 
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Store className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-red-900 mb-2">AC Stalls</h3>
            <p className="text-sm text-red-700 mb-2">Climate controlled comfort</p>
            <div className="text-lg font-bold text-blue-600">₹13,000 - ₹39,500</div>
          </div>
          
          <div className="bg-white rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-red-900 mb-2">Non-AC Stalls</h3>
            <p className="text-sm text-red-700 mb-2">Cost-effective options</p>
            <div className="text-lg font-bold text-green-600">₹12,000 - ₹25,000</div>
          </div>
          
          <div className="bg-white rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-red-900 mb-2">Prime Locations</h3>
            <p className="text-sm text-red-700 mb-2">High visibility spots</p>
            <div className="text-lg font-bold text-purple-600">Premium Pricing</div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StallBooking;
            <h3 className="text-2xl font-bold text-red-900 mb-4">Need Help Choosing?</h3>
            <p className="text-red-700 mb-6">
              Our team is here to help you select the perfect stall for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex items-center space-x-2 text-red-800">
                <Info className="h-5 w-5" />
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