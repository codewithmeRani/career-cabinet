const express = require('express');
const questions = require('../data/questions');
const streams = require('../data/streams');
const QuizResult = require('../models/QuizResult');
const { scoreQuiz } = require('../lib/scoring');

const router = express.Router();

// GET /api/quiz/questions - questions without the scoring data
router.get('/questions', (req, res) => {
  res.json(
    questions.map((q) => ({ id: q.id, text: q.text, options: q.options.map((o) => o.text) }))
  );
});

// POST /api/quiz/submit  { name?, answers: [{ questionId, optionIndex }] }
router.post('/submit', async (req, res, next) => {
  try {
    const { name, answers } = req.body || {};
    let ranking;
    try {
      ranking = scoreQuiz(answers);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    const top = ranking.slice(0, 3).map((r) => {
      const stream = streams.find((s) => s.id === r.id);
      return { ...stream, score: r.score, match: r.match };
    });

    let saved = false;
    try {
      await QuizResult.create({
        name: (name || '').toString().slice(0, 60) || 'Anonymous',
        answers,
        ranking,
        topStream: ranking[0].id
      });
      saved = true;
    } catch (err) {
      console.error('Could not save quiz result:', err.message);
    }

    res.json({ top, ranking, saved });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
