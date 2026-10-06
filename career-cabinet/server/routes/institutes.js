const express = require('express');
const mongoose = require('mongoose');
const Institute = require('../models/Institute');

const router = express.Router();

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// GET /api/institutes?q=&stream=&state=&type=&page=&limit=
router.get('/', async (req, res, next) => {
  try {
    const { q, stream, state, type } = req.query;
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 12, 1), 50);

    const filter = {};
    if (stream) filter.streams = String(stream);
    if (state) filter.state = String(state);
    if (type) filter.type = String(type);
    if (q && String(q).trim()) {
      const rx = new RegExp(escapeRegex(String(q).trim()), 'i');
      filter.$or = [{ name: rx }, { city: rx }, { state: rx }, { courses: rx }];
    }

    const [items, total] = await Promise.all([
      Institute.find(filter).sort({ name: 1 }).skip((page - 1) * limit).limit(limit).lean(),
      Institute.countDocuments(filter)
    ]);

    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
});

// GET /api/institutes/filters - values for the filter dropdowns
router.get('/filters', async (req, res, next) => {
  try {
    const [states, types] = await Promise.all([
      Institute.distinct('state'),
      Institute.distinct('type')
    ]);
    res.json({ states: states.sort(), types: types.sort() });
  } catch (err) {
    next(err);
  }
});

// GET /api/institutes/:id
router.get('/:id', async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: 'Invalid id' });
    }
    const item = await Institute.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ error: 'Institute not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
