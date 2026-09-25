import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const features = [
  { icon: '🔐', title: 'Secure Login', text: 'Authenticate with email and password and get access to your dashboard.' },
  { icon: '🛡️', title: 'Protected Routes', text: 'Private pages redirect to login automatically when you are signed out.' },
  { icon: '💾', title: 'Persistent Session', text: 'Refresh the browser and stay signed in thanks to localStorage.' },
];

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <section className="bg-linear-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
            React + Vite + React Router
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Manage everything from one Admin Dashboard
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            A clean, responsive admin panel with authentication, protected routes and nested
            dashboard pages.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
              >
                Login to Continue
              </Link>
            )}
            <Link
              to="/about"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}