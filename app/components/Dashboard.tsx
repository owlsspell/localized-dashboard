'use client';

import { useEffect } from 'react';
import { useUsersStore } from '../store/usersStore';
import { useFilteredUsers } from '../store/selectors';
import SearchInput from './SearchInput';
import UsersTable from './UsersTable';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';
import ErrorState from './ErrorState';

export default function Dashboard({ t }: { t: Record<string, string> }) {
    const { fetchUsers, loading, error } = useUsersStore();
    const { paged, totalPages } = useFilteredUsers();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">{t.title}</h1>

            <SearchInput placeholder={t.searchPlaceholder} />

            {loading && <LoadingSpinner label={t.loading} />}
            {!loading && error && (
                <ErrorState message={t.error} retryLabel={t.retry} onRetry={fetchUsers} />
            )}
            {!loading && !error && (
                <>
                    <UsersTable
                        users={paged}
                        columns={{ name: t.name, email: t.email, company: t.company }}
                    />
                    <Pagination
                        previousLabel={t.previous}
                        nextLabel={t.next}
                        totalPages={totalPages}
                    />
                </>
            )}
        </main>
    );
}