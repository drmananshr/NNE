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
const staticStallsData: StallData[] = [];

export const useStalls = () => {
  const [stalls, setStalls] = useState<StallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStalls = async () => {
      try {
        // Try to load from database service
        const { getAllStalls } = await import('../services/stallService');
        const stallsData = await getAllStalls();
        
        if (stallsData.length > 0) {
          setStalls(stallsData);
        } else {
          // Fallback to static data if database is empty
          setStalls(staticStallsData);
        }
      } catch (error) {
        console.error('Error loading stalls:', error);
        setError('Failed to load stalls data');
        // Fallback to static data on error
        setStalls(staticStallsData);
      } finally {
        setLoading(false);
      }
    };

    loadStalls();
  }, []);

  return { stalls, loading, error };
};