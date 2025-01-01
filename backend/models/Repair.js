const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  device: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Repair', repairSchema);
