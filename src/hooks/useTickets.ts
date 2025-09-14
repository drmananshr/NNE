import { useState, useEffect } from 'react';
import { getAllTicketTypes, TicketTypeData } from '../services/ticketService';

export const useTickets = () => {
  const [ticketTypes, setTicketTypes] = useState<TicketTypeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTicketTypes = async () => {
      try {
        setLoading(true);
        const tickets = await getAllTicketTypes();
        setTicketTypes(tickets);
        setError(null);
      } catch (err) {
        setError('Failed to fetch ticket types');
        console.error('Error fetching ticket types:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTicketTypes();
  }, []);

  const refreshTicketTypes = async () => {
    try {
      const tickets = await getAllTicketTypes();
      setTicketTypes(tickets);
    } catch (err) {
      setError('Failed to refresh ticket types');
      console.error('Error refreshing ticket types:', err);
    }
  };

  return {
    ticketTypes,
    loading,
    error,
    refreshTicketTypes
  };
};