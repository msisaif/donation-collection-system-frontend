import { fetchAuthUser } from '@/services/auth';
import Link from 'next/link';

export default async function DashboardOrLogin() {
    const authUser = await fetchAuthUser();

    return (
        <Link
            href={authUser ? '/dashboard' : '/login'}
            className="px-6 py-1.5 bg-brand text-white hover:opacity-90 rounded-lg"
        >
            {authUser ? 'Dashboard' : 'Login'}
        </Link>
    );
}
