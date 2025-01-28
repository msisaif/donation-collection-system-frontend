import Link from 'next/link';

export default async function DashboardOrLogin() {
    return (
        <Link
            href="/dashboard"
            className="px-6 py-1.5 bg-brand text-white hover:opacity-90 rounded-lg"
        >
            Dashboard
        </Link>
    );
}
