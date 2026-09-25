import { useState } from 'react';

const USERS = [
  { id: 1, name: 'Ayesha Khan', email: 'ayesha@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bilal Ahmed', email: 'bilal@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Sara Malik', email: 'sara@example.com', role: 'Viewer', status: 'Pending' },
  { id: 4, name: 'John Carter', email: 'john@example.com', role: 'Editor', status: 'Inactive' },
  { id: 5, name: 'Fatima Noor', email: 'fatima@example.com', role: 'Admin', status: 'Active' },
  { id: 6, name: 'Liam Chen', email: 'liam@example.com', role: 'Viewer', status: 'Active' },
  { id: 7, name: 'Maria Lopez', email: 'maria@example.com', role: 'Editor', status: 'Pending' },
];

const statusStyles = {
  Active: 'bg-emerald-100 text-emerald-700',
  Inactive: 'bg-slate-200 text-slate-600',
  Pending: 'bg-amber-100 text-amber-700',
};

export default function Users() {
  const [search, setSearch] = useState('');

  const filteredUsers = USERS.filter(({ name, email }) =>
    `${name} ${email}`.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="mt-1 text-slate-500">{filteredUsers.length} users found</p>
        </div>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name or email..."
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:w-72"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredUsers.map(({ id, name, email, role, status }) => (
              <tr key={id} className="transition hover:bg-slate-50">
                <td className="px-6 py-4 font-medium">{name}</td>
                <td className="px-6 py-4 text-slate-600">{email}</td>
                <td className="px-6 py-4 text-slate-600">{role}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-slate-500">
                  No users match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}