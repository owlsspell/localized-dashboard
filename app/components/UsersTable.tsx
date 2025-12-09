'use client';

import type { User } from '../store/usersStore';

export default function UsersTable({
    users,
    columns,
}: {
    users: User[];
    columns: { name: string; email: string; company: string };
}) {
    return (
        <div>
            {/* Desktop table */}
            <table className="hidden sm:table w-full border-collapse mb-4">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">{columns.name}</th>
                        <th className="text-left p-2">{columns.email}</th>
                        <th className="text-left p-2">{columns.company}</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id} className="border-b">
                            <td className="p-2">{u.name}</td>
                            <td className="p-2">{u.email}</td>
                            <td className="p-2">{u.company?.name ?? '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile stacked list */}
            <ul className="sm:hidden divide-y divide-gray-200 mb-4">
                {users.map((u) => (
                    <li key={u.id} className="py-2">
                        <div className="flex">
                            <span className="pr-2">{columns.name}:</span>
                            <div className="font-semibold">{u.name}</div>
                        </div>
                        <div className="flex">
                            <span className="pr-2">{columns.email}:</span>
                            <div className="text-gray-600">{u.email}</div>
                        </div>
                        <div className="flex">
                            <span className="pr-2">{columns.company}:</span>
                            <div className="text-gray-500">{u.company?.name ?? '—'}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}