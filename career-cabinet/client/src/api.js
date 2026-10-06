// Small wrapper around fetch for the Career Cabinet API
async function request(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const getQuestions = () => request('/quiz/questions');
export const submitQuiz = (name, answers) =>
  request('/quiz/submit', { method: 'POST', body: JSON.stringify({ name, answers }) });
export const getStreams = () => request('/streams');
export const getFilters = () => request('/institutes/filters');
export const getInstitutes = (params) => {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null));
  return request(`/institutes?${qs}`);
};
