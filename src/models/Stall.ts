import mongoose from 'mongoose';

const StallSchema = new mongoose.Schema({
  stallId: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['AC Prime', 'AC Standard', 'Non-AC']
  },
  inclusion: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Booked', 'Reserved'],
    default: 'Available'
  },
  dealer: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  floor: {
    type: String,
    enum: ['AC', 'Non-AC'],
    required: true
  },
  position: {
    x: Number,
    y: Number
  },
  dimensions: {
    width: Number,
    height: Number
  }
}, {
  timestamps: true
});

export default mongoose.models.Stall || mongoose.model('Stall', StallSchema);