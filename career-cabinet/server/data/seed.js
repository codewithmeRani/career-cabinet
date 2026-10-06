require('dotenv').config();
const mongoose = require('mongoose');
const Institute = require('../models/Institute');
const institutes = require('./institutes');

async function seedIfEmpty() {
  const count = await Institute.countDocuments();
  if (count === 0) {
    await Institute.insertMany(institutes);
    console.log(`Seeded ${institutes.length} institutes`);
  }
}

// `npm run seed` wipes and reloads the institutes collection
if (require.main === module) {
  (async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/career_cabinet');
    await Institute.deleteMany({});
    await Institute.insertMany(institutes);
    console.log(`Reloaded ${institutes.length} institutes`);
    await mongoose.disconnect();
  })().catch((err) => { console.error(err); process.exit(1); });
}

module.exports = { seedIfEmpty };
