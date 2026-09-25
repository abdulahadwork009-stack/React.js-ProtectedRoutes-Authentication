const techStack = ['React', 'Vite', 'React Router DOM', 'Context API', 'localStorage', 'Tailwind CSS'];

const flowSteps = [
  'Open the app and land on Home',
  'Go to Login and enter your credentials',
  'Valid credentials open the Dashboard, invalid ones show an error',
  'Protected pages stay accessible, even after a refresh',
  'Logout clears the session and sends you back to Login',
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">About this project</h1>
      <p className="mt-4 text-lg text-slate-600">
        React Admin Dashboard is a practice project that demonstrates authentication, protected
        routes and nested routing using React Router. Public pages are open to everyone, while
        dashboard pages require a login.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Authentication flow</h2>
          <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-slate-600">
            {flowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}