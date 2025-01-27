import AccessDenied from '@/components/AccessDenied';
import { fetchAuthUser } from '@/services/auth';
import { fetchAllDonations } from '@/services/donations';
import {
    BanknotesIcon,
    DocumentIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Dashboard() {
    const authUser = await fetchAuthUser();

    if (!authUser) {
        return <AccessDenied />;
    }

    const donations = await fetchAllDonations();

    return (
        <>
            <section className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                        href="/dashboard/donations"
                        className="bg-white rounded-lg border p-4 text-center flex flex-col gap-2 items-center justify-center"
                    >
                        <BanknotesIcon className="size-24 text-brand" />

                        <p className="text-brand text-xl">
                            <b>{donations?.length} </b>
                            Donations &rarr;
                        </p>
                    </Link>
                    <Link
                        href="/dashboard/reports"
                        className="bg-white rounded-lg border p-4 text-center flex flex-col gap-2 items-center justify-center"
                    >
                        <DocumentIcon className="size-24 text-brand" />

                        <p className="text-brand font-bold text-xl">
                            Reports &rarr;
                        </p>
                    </Link>
                    <Link
                        href="/dashboard/trashes"
                        className="bg-white rounded-lg border p-4 text-center flex flex-col gap-2 items-center justify-center"
                    >
                        <TrashIcon className="size-24 text-brand" />

                        <p className="text-brand font-bold text-xl">
                            Trash List &rarr;
                        </p>
                    </Link>
                </div>
            </section>
        </>
    );
}
