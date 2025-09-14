import { initializeStallsData } from '../services/stallService';
import { initializeTicketTypes } from '../services/ticketService';

export const initializeAllData = async () => {
  try {
    console.log('Initializing database data...');
    
    // Initialize stalls data
    await initializeStallsData();
    
    // Initialize ticket types
    await initializeTicketTypes();
    
    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};