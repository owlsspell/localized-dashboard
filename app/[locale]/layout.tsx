import '../globals.css';

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: 'en' | 'fr' };
}) {
    return (
        <div className="max-w-4xl mx-auto p-4">
            {children}
        </div>
    );
}