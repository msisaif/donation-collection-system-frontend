import Link from 'next/link';

function AccessDenied() {
    return (
        <>
            <section className="container mx-auto p-4">
                <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6 md:p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Access Denied
                        </h1>
                    </div>
                    <div className="text-center grid gap-4">
                        <p className="text-sm md:text-xl">
                            You are not logged in. Please log in to access the
                            dashboard.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/login"
                                className="px-8 py-2 border bg-brand text-white rounded-lg"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccessDenied;
