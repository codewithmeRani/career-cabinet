const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: 'Anonymous' },
    answers: [{ questionId: Number, optionIndex: Number }],
    ranking: [{ id: String, score: Number, match: Number }],
    topStream: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('QuizResult', quizResultSchema);
