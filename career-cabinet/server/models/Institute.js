const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    type: { type: String, enum: ['Government', 'Private', 'Deemed'], required: true },
    streams: [{ type: String, index: true }], // stream ids, e.g. "engineering"
    courses: [{ type: String }],
    entrance: { type: String, default: 'Check the official website' },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

instituteSchema.index({ name: 'text', city: 'text', state: 'text', courses: 'text' });

module.exports = mongoose.model('Institute', instituteSchema);
