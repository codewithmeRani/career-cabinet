const express = require('express');
const cors = require('cors');

const quizRoutes = require('./routes/quiz');
const streamRoutes = require('./routes/careers');
const instituteRoutes = require('./routes/institutes');

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/quiz', quizRoutes);
app.use('/api/streams', streamRoutes);
app.use('/api/institutes', instituteRoutes);

app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

module.exports = app;
