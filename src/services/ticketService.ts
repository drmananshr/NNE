import connectDB from '../lib/database';
import TicketType from '../models/Ticket';

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

export const getAllTicketTypes = async (): Promise<TicketTypeData[]> => {
  try {
    await connectDB();
    const tickets = await TicketType.find({ isActive: true }).sort({ price: 1 });
    return tickets.map(ticket => ({
      ticketId: ticket.ticketId,
      name: ticket.name,
      price: ticket.price,
      description: ticket.description,
      features: ticket.features,
      isPopular: ticket.isPopular,
      isActive: ticket.isActive,
      maxQuantity: ticket.maxQuantity,
      validDays: ticket.validDays
    }));
  } catch (error) {
    console.error('Error fetching ticket types:', error);
    return [];
  }
};

export const initializeTicketTypes = async () => {
  try {
    await connectDB();
    
    // Check if ticket types already exist
    const existingTickets = await TicketType.countDocuments();
    if (existingTickets > 0) {
      console.log('Ticket types already exist');
      return;
    }

    // Initial ticket types data
    const ticketTypes = [
      {
        ticketId: 'single',
        name: 'Single Day Pass',
        price: 500,
        description: 'Access to all exhibitions and sessions for one day',
        features: ['Exhibition access', 'Dealer stalls', 'Academic sessions', 'Networking events'],
        isPopular: false,
        validDays: ['Day 1', 'Day 2', 'Day 3']
      },
      {
        ticketId: 'threeDay',
        name: 'Three Day Pass',
        price: 1200,
        description: 'Complete access to all three days including special events',
        features: ['All exhibition days', 'Live auction access', 'NNAP Awards ceremony', 'Exclusive preview sessions', 'Welcome & farewell events'],
        isPopular: true,
        validDays: ['All Days']
      },
      {
        ticketId: 'student',
        name: 'Student Pass',
        price: 300,
        description: 'Discounted rate for students with valid ID',
        features: ['Exhibition access (3 days)', 'Academic sessions', 'Student networking events', 'Valid student ID required'],
        isPopular: false,
        validDays: ['All Days']
      },
      {
        ticketId: 'family',
        name: 'Family Pack (4 people)',
        price: 3500,
        description: 'Best value for families - includes 4 three-day passes',
        features: ['4 × Three day passes', 'Family seating area', 'Special family activities', 'Children under 12 free'],
        isPopular: false,
        validDays: ['All Days']
      }
    ];

    await TicketType.insertMany(ticketTypes);
    console.log('Ticket types initialized successfully');
  } catch (error) {
    console.error('Error initializing ticket types:', error);
  }
};