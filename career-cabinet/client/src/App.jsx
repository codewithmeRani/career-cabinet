import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Quiz from './pages/Quiz.jsx';
import Result from './pages/Result.jsx';
import Careers from './pages/Careers.jsx';
import Colleges from './pages/Colleges.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="*" element={<p className="notice">Page not found.</p>} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Career Cabinet · Final-year project · College data is sample data, so please check official websites.</p>
      </footer>
    </>
  );
}
