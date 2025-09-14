import { initializeStallsData } from '../services/stallService';
import { initializeTicketTypes } from '../services/ticketService';

export const initializeAllData = async () => {
  try {
    console.log('Initializing database data...');
    
    // Only initialize if we're in a server environment
    if (typeof window === 'undefined') {
      // Initialize stalls data
      await initializeStallsData();
      
      // Initialize ticket types
      await initializeTicketTypes();
    } else {
      console.log('Skipping database initialization in browser environment');
    }
    
    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};