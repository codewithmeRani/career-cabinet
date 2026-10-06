import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Career<span>Cabinet</span></Link>
        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/quiz">Career Quiz</NavLink>
          <NavLink to="/careers">Explore Careers</NavLink>
          <NavLink to="/colleges">Find Colleges</NavLink>
        </nav>
      </div>
    </header>
  );
}
