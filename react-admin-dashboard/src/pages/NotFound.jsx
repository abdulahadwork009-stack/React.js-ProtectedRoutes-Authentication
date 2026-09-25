import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center px-4 text-center">
      <div>
        <p className="text-7xl font-extrabold text-indigo-600">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-100"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}