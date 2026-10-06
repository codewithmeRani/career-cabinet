const streams = require('../data/streams');
const questions = require('../data/questions');

/**
 * answers: [{ questionId: number, optionIndex: number }]
 * Returns the streams ranked by score, with a percentage match.
 */
function scoreQuiz(answers) {
  if (!Array.isArray(answers) || answers.length === 0) {
    throw new Error('answers must be a non-empty array');
  }

  const totals = Object.fromEntries(streams.map((s) => [s.id, 0]));
  const maxPossible = Object.fromEntries(streams.map((s) => [s.id, 0]));
  const seen = new Set();

  for (const a of answers) {
    const question = questions.find((qn) => qn.id === Number(a.questionId));
    if (!question) throw new Error(`Unknown question id: ${a.questionId}`);
    if (seen.has(question.id)) throw new Error(`Duplicate answer for question ${question.id}`);
    seen.add(question.id);

    const option = question.options[Number(a.optionIndex)];
    if (!option) throw new Error(`Invalid option for question ${question.id}`);

    for (const [streamId, pts] of Object.entries(option.scores)) totals[streamId] += pts;

    // the best this question could give each stream (for the % calculation)
    for (const s of streams) {
      const best = Math.max(...question.options.map((o) => o.scores[s.id] || 0));
      maxPossible[s.id] += best;
    }
  }

  const ranked = streams
    .map((s) => ({
      id: s.id,
      score: totals[s.id],
      match: maxPossible[s.id] ? Math.round((totals[s.id] / maxPossible[s.id]) * 100) : 0
    }))
    .sort((a, b) => b.score - a.score || b.match - a.match);

  return ranked;
}

module.exports = { scoreQuiz };
