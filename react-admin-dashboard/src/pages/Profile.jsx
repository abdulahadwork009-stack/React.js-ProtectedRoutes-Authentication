const profile = {
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'Administrator',
  department: 'Head Office',
  joined: 'January 2026',
};

export default function Profile() {
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('');

  const details = [
    { label: 'Email', value: profile.email },
    { label: 'Role', value: profile.role },
    { label: 'Department', value: profile.department },
    { label: 'Member since', value: profile.joined },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-1 text-slate-500">Your account information.</p>

      <div className="mt-6 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-24 bg-linear-to-r from-indigo-500 to-purple-600" />
        <div className="px-6 pb-6">
          <div className="-mt-10 grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-indigo-600 text-2xl font-bold text-white">
            {initials}
          </div>
          <h2 className="mt-3 text-xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-slate-500">{profile.role}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {details.map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4">
                <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}