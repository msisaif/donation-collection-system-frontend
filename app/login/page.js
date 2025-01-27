import LoginForm from '@/components/LoginForm';
import { fetchAuthUser } from '@/services/auth';
import Link from 'next/link';

export default async function Login() {
    const authUser = await fetchAuthUser();

    if (authUser) {
        return (
            <>
                <section className="container mx-auto p-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6 md:p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-xl text-gray-900">
                                Login by <b>{authUser?.email}</b>
                            </h1>
                        </div>
                        <div className="text-center grid gap-4">
                            <p className="text-sm md:text-xl">
                                You are already logged in. Please go to the
                                dashboard.
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href="/dashboard"
                                    className="px-8 py-2 border bg-brand text-white rounded-lg"
                                >
                                    Go to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="container mx-auto p-4">
                <LoginForm />
            </section>
        </>
    );
}
