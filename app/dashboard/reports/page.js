import AccessDenied from '@/components/AccessDenied';
import { fetchAuthUser } from '@/services/auth';
import { fetchAllDonations } from '@/services/donations';
import Link from 'next/link';

export default async function ReportPage() {
    const authUser = await fetchAuthUser();

    if (!authUser) {
        return <AccessDenied />;
    }

    const donations = await fetchAllDonations();

    return (
        <>
            <section className="container mx-auto p-4">
                <div className="w-full bg-white rounded-lg border p-6 md:p-8">
                    <div className="px-4 mb-8 flex gap-y-4 flex-col md:flex-row md:justify-between md:items-center">
                        <h1 className="md:text-center text-2xl font-bold text-gray-900">
                            Reports
                        </h1>
                        <div className="flex gap-4 justify-end">
                            <Link
                                href="/dashboard/donations"
                                className="text-brand underline underline-offset-2"
                            >
                                Donations &rarr;
                            </Link>
                            <Link
                                href="/dashboard/trashes"
                                className="text-brand underline underline-offset-2"
                            >
                                Trashes &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="text-center grid grid-cols-3 gap-4 *:border *:py-8 *:rounded-lg *:bg-gray-100">
                        <p className="text-sm md:text-xl">
                            No. of Donations: <b>{donations?.length}</b>
                        </p>
                        <p className="text-sm md:text-xl">
                            Total Amount:{' '}
                            <b>
                                {donations?.reduce(
                                    (acc, curr) => acc + curr.amount,
                                    0
                                )}{' '}
                            </b>
                            BDT
                        </p>
                        <p className="text-sm md:text-xl">
                            No. of Donors:{' '}
                            <b>
                                {
                                    [
                                        ...new Set(
                                            donations?.map(
                                                (donation) => donation.email
                                            )
                                        ),
                                    ].length
                                }{' '}
                            </b>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
