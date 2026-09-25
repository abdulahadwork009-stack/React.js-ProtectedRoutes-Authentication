import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const sidebarLinks = [
  { to: '/dashboard', label: 'Overview', icon: '📊', end: true },
  { to: '/dashboard/profile', label: 'Profile', icon: '👤' },
  { to: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  { to: '/dashboard/users', label: 'Users', icon: '👥' },
];

const sidebarLinkClass = ({ isActive }) =>
  `flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
  }`;

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <aside className="w-full bg-slate-900 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:w-64 md:shrink-0">
      {/* Mobile: horizontal scrollable tabs | Desktop: vertical sidebar */}
      <div className="flex h-full gap-1 overflow-x-auto p-3 md:flex-col md:overflow-visible md:p-4">
        <p className="hidden px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 md:block">
          Dashboard
        </p>

        {sidebarLinks.map(({ to, label, icon, end }) => (
          <NavLink key={to} to={to} end={end} className={sidebarLinkClass}>
            <span aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={handleLogout}
          className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/10 hover:text-red-200 md:mt-auto"
        >
          <span aria-hidden="true">🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}