import { useState, useEffect } from 'react';

export interface TicketTypeData {
  ticketId: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  isActive?: boolean;
  maxQuantity?: number;
  validDays: string[];
}

// Temporary static data until backend is set up
const staticTicketData: TicketTypeData[] = [
  {
    ticketId: 'single',
    name: 'Single Day Pass',
    price: 500,
    description: 'Access to all exhibitions and sessions for one day',
    features: ['Exhibition access', 'Dealer stalls', 'Academic sessions', 'Networking events'],
    isPopular: false,
    validDays: ['Day 1', 'Day 2', 'Day 3'],
    maxQuantity: 10
  },
  {
    ticketId: 'threeDay',
    name: 'Three Day Pass',
    price: 1200,
    description: 'Complete access to all three days including special events',
    features: ['All exhibition days', 'Live auction access', 'NNAP Awards ceremony', 'Exclusive preview sessions', 'Welcome & farewell events'],
    isPopular: true,
    validDays: ['All Days'],
    maxQuantity: 10
  },
  {
    ticketId: 'student',
    name: 'Student Pass',
    price: 300,
    description: 'Discounted rate for students with valid ID',
    features: ['Exhibition access (3 days)', 'Academic sessions', 'Student networking events', 'Valid student ID required'],
    isPopular: false,
    validDays: ['All Days'],
    maxQuantity: 10
  },
  {
    ticketId: 'family',
    name: 'Family Pack (4 people)',
    price: 3500,
    description: 'Best value for families - includes 4 three-day passes',
    features: ['4 × Three day passes', 'Family seating area', 'Special family activities', 'Children under 12 free'],
    isPopular: false,
    validDays: ['All Days'],
    maxQuantity: 10
  }
];

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketTypeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setTickets(staticTicketData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { tickets, loading, error };
};