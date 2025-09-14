import mongoose from 'mongoose';

const StallBookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  stallIds: [{
    type: String,
    required: true
  }],
  companyName: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  specialRequirements: {
    type: String,
    default: ''
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Partial', 'Completed', 'Refunded'],
    default: 'Pending'
  },
  advanceAmount: {
    type: Number,
    default: 0
  },
  remainingAmount: {
    type: Number,
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Pending'
  },
  paymentDueDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.StallBooking || mongoose.model('StallBooking', StallBookingSchema);