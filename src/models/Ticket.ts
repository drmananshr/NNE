import mongoose from 'mongoose';

const TicketTypeSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  isPopular: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  maxQuantity: {
    type: Number,
    default: 10
  },
  validDays: [{
    type: String,
    enum: ['Day 1', 'Day 2', 'Day 3', 'All Days']
  }]
}, {
  timestamps: true
});

export default mongoose.models.TicketType || mongoose.model('TicketType', TicketTypeSchema);