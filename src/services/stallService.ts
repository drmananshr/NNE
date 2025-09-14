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

    // Complete stalls data from table_test.md
    const stallsData = [
      // AC Prime Stalls
      { stallId: 'AC Prime 1', inclusion: '5 Tables (1Table 5 feet Length & 4 Tables 4 Feet Length) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39500, dealer: 'Anuj Mahendroo', city: 'New Delhi', state: 'Delhi', country: 'India', status: 'Reserved', category: 'AC Prime', floor: 'AC' },
      { stallId: 'AC Prime 2', inclusion: '3 Tables (5 feet Length) + 3 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 39000, dealer: 'Girish J Veera', city: 'Mumbai', state: 'Maharashtra', country: 'India', status: 'Booked', category: 'AC Prime', floor: 'AC' },
      
      // AC Standard Stalls
      { stallId: 'AC-01', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-02', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-03', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-04', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-05', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-06', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-07', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-08', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 26000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-09', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 21500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-10', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-11', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-12', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-13', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-14', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-15', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-16', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 21500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-17', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 21000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-18', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-19', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-20', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-21', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-22', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-23', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-24', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 21000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-25', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-26', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-27', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-28', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-29', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-30', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-31', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-32', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-33', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-34', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-35', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-36', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-37', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-38', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-39', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14750, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-40', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-41', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-42', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-43', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-44', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-45', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-46', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-47', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-48', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-49', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-50', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-51', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-52', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-53', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-54', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-55', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-56', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-57', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-58', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-59', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-60', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-61', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-62', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-63', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-64', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-65', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-66', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17700, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-67', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-68', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-69', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 22800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-70', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-71', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 23800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-72', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 22800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-73', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 20800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-74', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 20800, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-75', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-76', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 19500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-77', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 18500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      { stallId: 'AC-78', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 18500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'AC Standard', floor: 'AC' },
      
      // Non-AC Stalls
      { stallId: 'Non AC - A', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 25000, dealer: 'Marudhar Arts', city: 'Bangalore', state: 'Karnataka', country: 'India', status: 'Reserved', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - B', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - C', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - D', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - E', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 14500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - F', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 15500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - G', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 12000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - H', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 13500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - I', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 12000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - J', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 16000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - K', inclusion: '3 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 17500, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' },
      { stallId: 'Non AC - L', inclusion: '2 Tables (L Shaped) + 2 Chair + Lunch for 2 Person + 2 Water Bottle Per Day', rent: 25000, dealer: '', city: '', state: '', country: '', status: 'Available', category: 'Non-AC', floor: 'Non-AC' }
    ];

    await Stall.insertMany(stallsData);
    console.log(`Successfully initialized ${stallsData.length} stalls in database`);
  } catch (error) {
    console.error('Error initializing stalls data:', error);
  }
};