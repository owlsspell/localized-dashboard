'use client';

import { useUsersStore } from '../store/usersStore';

export default function Pagination({
    previousLabel,
    nextLabel,
    totalPages,
}: {
    previousLabel: string;
    nextLabel: string;
    totalPages: number;
}) {
    const page = useUsersStore((s) => s.page);
    const setPage = useUsersStore((s) => s.setPage);

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                {previousLabel}
            </button>
            <span>
                {page} / {totalPages}
            </span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                {nextLabel}
            </button>
        </div>
    );
}