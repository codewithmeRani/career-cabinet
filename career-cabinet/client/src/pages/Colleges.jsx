import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilters, getInstitutes, getStreams } from '../api.js';

export default function Colleges() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const stream = params.get('stream') || '';
  const state = params.get('state') || '';
  const type = params.get('type') || '';
  const page = Number(params.get('page') || 1);

  const [text, setText] = useState(q); // what the user is typing
  const [streams, setStreams] = useState([]);
  const [filters, setFilters] = useState({ states: [], types: [] });
  const [data, setData] = useState({ items: [], total: 0, pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const update = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries({ page: '', ...changes }).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    setParams(next);
  };

  useEffect(() => {
    Promise.all([getStreams(), getFilters()])
      .then(([s, f]) => { setStreams(s); setFilters(f); })
      .catch((e) => setError(e.message));
  }, []);

  // debounce the search box
  useEffect(() => {
    const t = setTimeout(() => { if (text !== q) update({ q: text }); }, 350);
    return () => clearTimeout(t);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLoading(true);
    getInstitutes({ q, stream, state, type, page, limit: 9 })
      .then((d) => { setData(d); setError(''); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [q, stream, state, type, page]);

  const streamName = (id) => streams.find((s) => s.id === id)?.name || id;

  return (
    <section>
      <h1>Find Colleges</h1>
      <p className="muted">Search by college name, city, state or course (for example "B.Tech" or "MBBS").</p>

      <div className="filters">
        <input className="input" placeholder="Search…" value={text} onChange={(e) => setText(e.target.value)} />
        <select className="input" value={stream} onChange={(e) => update({ stream: e.target.value })}>
          <option value="">All streams</option>
          {streams.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select className="input" value={state} onChange={(e) => update({ state: e.target.value })}>
          <option value="">All states</option>
          {filters.states.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className="input" value={type} onChange={(e) => update({ type: e.target.value })}>
          <option value="">All types</option>
          {filters.types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      {error && <p className="notice error">{error}</p>}
      <p className="muted">{loading ? 'Searching…' : `${data.total} result${data.total === 1 ? '' : 's'}`}</p>

      <div className="grid3">
        {data.items.map((c) => (
          <article className="card college" key={c._id}>
            <h3>{c.name}</h3>
            <p className="muted">📍 {c.city}, {c.state} · {c.type}</p>
            <p>{c.description}</p>
            <div className="chips">{c.courses.map((co) => <span key={co}>{co}</span>)}</div>
            <p className="small-text"><b>Entrance:</b> {c.entrance}</p>
            <p className="small-text muted">{c.streams.map(streamName).join(' · ')}</p>
          </article>
        ))}
      </div>

      {!loading && data.items.length === 0 && !error && <p className="notice">No colleges match your search.</p>}

      {data.pages > 1 && (
        <div className="row center">
          <button className="btn ghost" disabled={page <= 1} onClick={() => update({ page: String(page - 1) })}>Previous</button>
          <span className="muted">Page {data.page} of {data.pages}</span>
          <button className="btn ghost" disabled={page >= data.pages} onClick={() => update({ page: String(page + 1) })}>Next</button>
        </div>
      )}
    </section>
  );
}
