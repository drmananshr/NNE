import { useState, useEffect } from 'react';

export interface StallData {
  stallId: string;
  category: 'AC Prime' | 'AC Standard' | 'Non-AC';
  inclusion: string;
  rent: number;
  status: 'Available' | 'Booked' | 'Reserved';
  dealer?: string;
  city?: string;
  state?: string;
  country?: string;
  floor: 'AC' | 'Non-AC';
}

// Temporary static data until backend is set up
const staticStallsData: StallData[] = [
  { stallId: 'AC Prime 1', inclusion: '5 Tables (1Table 5 feet Length & 4 Tables 4 Feet Length) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39500, dealer: 'Anuj Mahendroo', city: 'New Delhi', state: 'Delhi', country: 'India', status: 'Reserved', category: 'AC Prime', floor: 'AC' },
  { stallId: 'AC Prime 2', inclusion: '3 Tables (5 feet Length) + 3 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39000, dealer: 'Girish J Veera', city: 'Mumbai', state: 'Maharashtra', country: 'India', status: 'Booked', category: 'AC Prime', floor: 'AC' },
  { stallId: 'AC-01', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
  { stallId: 'AC-02', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
  { stallId: 'AC-03', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
  { stallId: 'AC-04', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
  { stallId: 'AC-05', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
  { stallId: 'Non AC - A', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 25000, dealer: 'Marudhar Arts', city: 'Bangalore', state: 'Karnataka', country: 'India', status: 'Reserved', category: 'Non-AC', floor: 'Non-AC' },
  { stallId: 'Non AC - B', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
  { stallId: 'Non AC - C', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' }
];

export const useStalls = () => {
  const [stalls, setStalls] = useState<StallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setStalls(staticStallsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { stalls, loading, error };
};