import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const stats = [
  { label: 'Total Users', value: '1,248', change: '+12%' },
  { label: 'Revenue', value: '$48,290', change: '+8.2%' },
  { label: 'Orders', value: '932', change: '+3.1%' },
  { label: 'Active Sessions', value: '214', change: '-1.4%' },
];

const recentActivity = [
  'New user registered',
  'Order #4821 was completed',
  'Settings were updated',
  'Weekly report generated',
];

// Shown at /dashboard (the index route)
export function DashboardOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p className="mt-1 text-slate-500">Here is what is happening today.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            <p
              className={`mt-1 text-sm font-medium ${
                change.startsWith('-') ? 'text-red-600' : 'text-emerald-600'
              }`}
            >
              {change} this month
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ul className="mt-4 divide-y divide-slate-100">
          {recentActivity.map((item) => (
            <li key={item} className="flex items-center gap-3 py-3 text-sm text-slate-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Layout for all /dashboard/* pages
export default function Dashboard() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
      <Sidebar />
      <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <Outlet />
      </section>
    </div>
  );
}