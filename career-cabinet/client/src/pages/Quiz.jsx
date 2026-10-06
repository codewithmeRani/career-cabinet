import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions, submitQuiz } from '../api.js';

export default function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: optionIndex }
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getQuestions()
      .then(setQuestions)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="notice">Loading questions…</p>;
  if (error && questions.length === 0) return <p className="notice error">{error}</p>;

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const selected = answers[q.id];
  const progress = Math.round(((current + (selected != null ? 1 : 0)) / questions.length) * 100);

  const choose = (idx) => setAnswers((a) => ({ ...a, [q.id]: idx }));

  const finish = async () => {
    setSubmitting(true);
    setError('');
    try {
      const payload = Object.entries(answers).map(([questionId, optionIndex]) => ({
        questionId: Number(questionId),
        optionIndex
      }));
      const result = await submitQuiz(name, payload);
      sessionStorage.setItem('cc-result', JSON.stringify(result));
      navigate('/result', { state: result });
    } catch (e) {
      setError(e.message);
      setSubmitting(false);
    }
  };

  return (
    <section className="quiz">
      <h1>Career Interest Quiz</h1>
      <div className="progress"><div style={{ width: `${progress}%` }} /></div>
      <p className="muted">Question {current + 1} of {questions.length}</p>

      {current === 0 && (
        <input
          className="input"
          placeholder="Your name (optional)"
          value={name}
          maxLength={60}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <div className="card">
        <h2>{q.text}</h2>
        <div className="options">
          {q.options.map((text, idx) => (
            <button
              key={idx}
              className={`option ${selected === idx ? 'selected' : ''}`}
              onClick={() => choose(idx)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="notice error">{error}</p>}

      <div className="row">
        <button className="btn ghost" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>Back</button>
        {isLast ? (
          <button className="btn" disabled={selected == null || submitting} onClick={finish}>
            {submitting ? 'Calculating…' : 'See My Results'}
          </button>
        ) : (
          <button className="btn" disabled={selected == null} onClick={() => setCurrent((c) => c + 1)}>Next</button>
        )}
      </div>
    </section>
  );
}
