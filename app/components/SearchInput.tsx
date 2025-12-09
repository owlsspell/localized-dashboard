'use client';

import { useUsersStore } from '../store/usersStore';

export default function SearchInput({ placeholder }: { placeholder: string }) {
    const query = useUsersStore((s) => s.query);
    const setQuery = useUsersStore((s) => s.setQuery);

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full max-w-md"
        />
    );
}