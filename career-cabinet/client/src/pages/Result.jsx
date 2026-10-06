import { Link, useLocation } from 'react-router-dom';

function loadResult(state) {
  if (state && state.top) return state;
  try {
    return JSON.parse(sessionStorage.getItem('cc-result'));
  } catch {
    return null;
  }
}

export default function Result() {
  const { state } = useLocation();
  const result = loadResult(state);

  if (!result || !result.top) {
    return (
      <p className="notice">
        No result yet. <Link to="/quiz">Take the quiz</Link> to get your recommendations.
      </p>
    );
  }

  return (
    <section>
      <h1>Your Recommended Streams</h1>
      <p className="muted">Based on your answers, these streams match your interests best.</p>

      {result.top.map((s, i) => (
        <article className={`card result ${i === 0 ? 'best' : ''}`} key={s.id}>
          <div className="result-head">
            <div className="icon">{s.icon}</div>
            <div>
              <h2>{i === 0 && <span className="tag">Best match</span>} {s.name}</h2>
              <p className="muted">{s.description}</p>
            </div>
            <div className="match">{s.match}%</div>
          </div>
          <div className="meter"><div style={{ width: `${s.match}%` }} /></div>

          <div className="cols">
            <div>
              <h4>Careers to explore</h4>
              <ul>{s.careers.map((c) => <li key={c.title}><b>{c.title}</b>: {c.description}</li>)}</ul>
            </div>
            <div>
              <h4>Courses</h4>
              <ul>{s.courses.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
          <Link className="btn small" to={`/colleges?stream=${s.id}`}>Find colleges for this stream</Link>
        </article>
      ))}

      <div className="row">
        <Link to="/quiz" className="btn ghost">Retake Quiz</Link>
        <Link to="/careers" className="btn">Explore All Careers</Link>
      </div>
    </section>
  );
}
