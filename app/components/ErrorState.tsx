'use client';

export default function ErrorState({
    message,
    retryLabel,
    onRetry,
}: {
    message: string;
    retryLabel: string;
    onRetry: () => void;
}) {
    return (
        <div className="bg-red-100 text-red-700 p-3 rounded">
            {message}
            <button
                onClick={onRetry}
                className="ml-2 px-3 py-1 border rounded bg-white"
            >
                {retryLabel}
            </button>
        </div>
    );
}