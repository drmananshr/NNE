import { useState, useEffect } from 'react';
import { getAllStalls, StallData } from '../services/stallService';

export const useStalls = () => {
  const [stalls, setStalls] = useState<StallData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStalls = async () => {
      try {
        setLoading(true);
        const stallsData = await getAllStalls();
        setStalls(stallsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch stalls data');
        console.error('Error fetching stalls:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStalls();
  }, []);

  const refreshStalls = async () => {
    try {
      const stallsData = await getAllStalls();
      setStalls(stallsData);
    } catch (err) {
      setError('Failed to refresh stalls data');
      console.error('Error refreshing stalls:', err);
    }
  };

  return {
    stalls,
    loading,
    error,
    refreshStalls
  };
};