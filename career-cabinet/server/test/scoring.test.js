const assert = require('assert');
const { scoreQuiz } = require('../lib/scoring');
const questions = require('../data/questions');
const streams = require('../data/streams');

// 1. Picking the "tech" option every time should rank engineering first
const techAnswers = questions.map((q) => {
  let best = 0, bestPts = -1;
  q.options.forEach((o, idx) => { const p = o.scores.engineering || 0; if (p > bestPts) { bestPts = p; best = idx; } });
  return { questionId: q.id, optionIndex: best };
});
assert.strictEqual(scoreQuiz(techAnswers)[0].id, 'engineering');

// 2. Same for every stream: choosing its best option each time ranks it first
for (const s of streams) {
  const ans = questions.map((q) => {
    let best = 0, bestPts = -1;
    q.options.forEach((o, idx) => { const p = o.scores[s.id] || 0; if (p > bestPts) { bestPts = p; best = idx; } });
    return { questionId: q.id, optionIndex: best };
  });
  const ranked = scoreQuiz(ans);
  assert.strictEqual(ranked[0].id, s.id, `${s.id} should rank first`);
  assert.ok(ranked[0].match > 0 && ranked[0].match <= 100);
}

// 3. Validation
assert.throws(() => scoreQuiz([]));
assert.throws(() => scoreQuiz([{ questionId: 999, optionIndex: 0 }]));
assert.throws(() => scoreQuiz([{ questionId: 1, optionIndex: 9 }]));
assert.throws(() => scoreQuiz([{ questionId: 1, optionIndex: 0 }, { questionId: 1, optionIndex: 1 }]));

console.log('All scoring tests passed');
