import connectDB from '../lib/database';
import Stall from '../models/Stall';

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

export const getAllStalls = async (): Promise<StallData[]> => {
  try {
    await connectDB();
    const stalls = await Stall.find({}).sort({ stallId: 1 });
    return stalls.map(stall => ({
      stallId: stall.stallId,
      category: stall.category,
      inclusion: stall.inclusion,
      rent: stall.rent,
      status: stall.status,
      dealer: stall.dealer || '',
      city: stall.city || '',
      state: stall.state || '',
      country: stall.country || '',
      floor: stall.floor
    }));
  } catch (error) {
    console.error('Error fetching stalls:', error);
    return [];
  }
};

export const getAvailableStalls = async (): Promise<StallData[]> => {
  try {
    await connectDB();
    const stalls = await Stall.find({ status: 'Available' }).sort({ stallId: 1 });
    return stalls.map(stall => ({
      stallId: stall.stallId,
      category: stall.category,
      inclusion: stall.inclusion,
      rent: stall.rent,
      status: stall.status,
      dealer: stall.dealer || '',
      city: stall.city || '',
      state: stall.state || '',
      country: stall.country || '',
      floor: stall.floor
    }));
  } catch (error) {
    console.error('Error fetching available stalls:', error);
    return [];
  }
};

export const updateStallStatus = async (stallId: string, status: 'Available' | 'Booked' | 'Reserved', dealerInfo?: { dealer: string; city: string; state: string; country: string }) => {
  try {
    await connectDB();
    const updateData: any = { status };
    
    if (dealerInfo) {
      updateData.dealer = dealerInfo.dealer;
      updateData.city = dealerInfo.city;
      updateData.state = dealerInfo.state;
      updateData.country = dealerInfo.country;
    }
    
    await Stall.findOneAndUpdate({ stallId }, updateData);
    return true;
  } catch (error) {
    console.error('Error updating stall status:', error);
    return false;
  }
};

export const initializeStallsData = async () => {
  try {
    await connectDB();
    
    // Check if stalls already exist
    const existingStalls = await Stall.countDocuments();
    if (existingStalls > 0) {
      console.log('Stalls data already exists');
      return;
    }

    // Initial stalls data
    const stallsData = [
      { stallId: 'AC Prime 1', inclusion: '5 Tables (1Table 5 feet Length & 4 Tables 4 Feet Length) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39500, dealer: 'Anuj Mahendroo', city: 'New Delhi', state: 'Delhi', country: 'India', status: 'Reserved', category: 'AC Prime', floor: 'AC' },
      { stallId: 'AC Prime 2', inclusion: '3 Tables (5 feet Length) + 3 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39000, dealer: 'Girish J Veera', city: 'Mumbai', state: 'Maharashtra', country: 'India', status: 'Booked', category: 'AC Prime', floor: 'AC' },
      { stallId: 'AC-01', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-02', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      // Add more stalls as needed...
    ];

    await Stall.insertMany(stallsData);
    console.log('Stalls data initialized successfully');
  } catch (error) {
    console.error('Error initializing stalls data:', error);
  }
};