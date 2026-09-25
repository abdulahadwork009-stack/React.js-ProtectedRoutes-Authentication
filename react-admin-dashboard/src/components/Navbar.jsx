import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const publicLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
];

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-indigo-50 text-indigo-700'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`;

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate('/login', { replace: true });
  };

  const renderLinks = () => (
    <>
      {publicLinks.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} onClick={closeMenu} className={navLinkClass}>
          {label}
        </NavLink>
      ))}

      {isAuthenticated ? (
        <>
          <NavLink to="/dashboard" onClick={closeMenu} className={navLinkClass}>
            Dashboard
          </NavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 md:ml-2"
          >
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login" onClick={closeMenu} className={navLinkClass}>
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-bold text-slate-900"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">
            A
          </span>
          AdminHub
        </Link>

        <div className="hidden items-center gap-1 md:flex">{renderLinks()}</div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">{renderLinks()}</div>
        </div>
      )}
    </header>
  );
}