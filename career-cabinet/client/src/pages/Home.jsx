import { Link } from 'react-router-dom';

const features = [
  { icon: '🧭', title: 'Take the Quiz', text: 'Answer 10 quick questions about your interests and get stream recommendations.', to: '/quiz' },
  { icon: '💼', title: 'Explore Careers', text: 'See careers and courses for every stream, in simple words.', to: '/careers' },
  { icon: '🏫', title: 'Find Colleges', text: 'Search and filter institutes by course, city, state and stream.', to: '/colleges' }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Find the career that <span className="grad">fits you</span></h1>
        <p>Career Cabinet helps students explore careers, courses and colleges, and recommends streams based on their interests.</p>
        <Link to="/quiz" className="btn">Start the Career Quiz</Link>
      </section>
      <section className="grid3">
        {features.map((f) => (
          <Link to={f.to} className="card feature" key={f.title}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
