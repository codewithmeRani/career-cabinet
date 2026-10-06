import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStreams } from '../api.js';

export default function Careers() {
  const [streams, setStreams] = useState([]);
  const [open, setOpen] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getStreams().then(setStreams).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="notice error">{error}</p>;
  if (streams.length === 0) return <p className="notice">Loading…</p>;

  return (
    <section>
      <h1>Explore Careers</h1>
      <p className="muted">Pick a stream to see sample careers and the courses that lead to them.</p>
      <div className="grid3">
        {streams.map((s) => (
          <article className={`card stream ${open === s.id ? 'open' : ''}`} key={s.id}>
            <button className="stream-btn" onClick={() => setOpen(open === s.id ? null : s.id)} aria-expanded={open === s.id}>
              <span className="icon">{s.icon}</span>
              <span><b>{s.name}</b><small>{s.description}</small></span>
            </button>
            {open === s.id && (
              <div className="details">
                <h4>Careers</h4>
                <ul>{s.careers.map((c) => <li key={c.title}><b>{c.title}</b>: {c.description}</li>)}</ul>
                <h4>Courses</h4>
                <div className="chips">{s.courses.map((c) => <span key={c}>{c}</span>)}</div>
                <Link className="btn small" to={`/colleges?stream=${s.id}`}>Find colleges</Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
