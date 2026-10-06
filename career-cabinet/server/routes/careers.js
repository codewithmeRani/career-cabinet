const express = require('express');
const streams = require('../data/streams');

const router = express.Router();

// GET /api/streams - all streams with careers and courses
router.get('/', (req, res) => res.json(streams));

// GET /api/streams/:id
router.get('/:id', (req, res) => {
  const stream = streams.find((s) => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  res.json(stream);
});

module.exports = router;
