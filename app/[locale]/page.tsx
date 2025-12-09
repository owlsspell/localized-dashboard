'use client';

import { use } from 'react';
import { dict } from './i18n';
import Dashboard from '../components/Dashboard';

export default function Page({ params }: { params: Promise<{ locale: 'en' | 'fr' }> }) {
    const { locale } = use(params);
    const t = dict[locale];
    return <Dashboard t={t} />;
}