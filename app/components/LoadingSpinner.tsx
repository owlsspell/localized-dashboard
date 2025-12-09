'use client';

export default function LoadingSpinner({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            <span>{label}</span>
        </div>
    );
}