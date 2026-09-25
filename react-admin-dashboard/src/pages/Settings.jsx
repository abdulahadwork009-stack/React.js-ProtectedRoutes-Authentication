import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    displayName: 'Admin User',
    emailNotifications: true,
    weeklyReports: false,
    twoFactor: false,
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setSettings((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const toggles = [
    { name: 'emailNotifications', label: 'Email notifications', hint: 'Get an email for important updates.' },
    { name: 'weeklyReports', label: 'Weekly reports', hint: 'Receive a summary every Monday.' },
    { name: 'twoFactor', label: 'Two-factor authentication', hint: 'Add an extra layer of security.' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-slate-500">Manage your preferences.</p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="displayName" className="mb-1 block text-sm font-medium text-slate-700">
            Display name
          </label>
          <input
            id="displayName"
            name="displayName"
            value={settings.displayName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="space-y-4">
          {toggles.map(({ name, label, hint }) => (
            <label key={name} className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name={name}
                checked={settings[name]}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-indigo-600"
              />
              <span>
                <span className="block text-sm font-medium">{label}</span>
                <span className="block text-xs text-slate-500">{hint}</span>
              </span>
            </label>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Save changes
          </button>
          {saved && <span className="text-sm font-medium text-emerald-600">✓ Settings saved</span>}
        </div>
      </form>
    </div>
  );
}