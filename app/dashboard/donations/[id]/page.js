import AccessDenied from '@/components/AccessDenied';
import DonationDeleteButton from '@/components/actions/DonationDeleteButton';
import DonationEditButton from '@/components/actions/DonationEditButton';
import { fetchAuthUser } from '@/services/auth';
import { fetchDonationById } from '@/services/donations';
import {
    CalendarIcon,
    CurrencyBangladeshiIcon,
    HashtagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Dashboard({ params }) {
    const { id } = await params;

    const authUser = await fetchAuthUser();

    if (!authUser) {
        return <AccessDenied />;
    }

    const donation = await fetchDonationById(id);

    if (!donation) {
        return (
            <>
                <section className="container mx-auto p-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6 md:p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-xl text-gray-900">
                                Donation Not Found
                            </h1>
                        </div>
                        <div className="text-center grid gap-4">
                            <p className="text-sm md:text-xl">
                                The donation you are looking for does not exist.
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href="/dashboard/donations"
                                    className="px-8 py-2 border bg-brand text-white rounded-lg"
                                >
                                    Back to Donation List
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
                <div className="max-w-3xl mx-auto bg-white rounded-lg border p-6 md:p-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-left text-xl text-gray-900">
                            <b>{donation?.name}</b> <br />
                            {donation?.email}
                        </h1>
                        <div className="flex gap-2">
                            <DonationEditButton donation={donation} />
                            <DonationDeleteButton id={id} />
                        </div>
                    </div>
                    <div className="text-center grid md:grid-cols-3 gap-4 *:border *:py-4 *:rounded-lg *:bg-gray-50">
                        <p className="text-sm md:text-xl flex flex-col justify-center items-center gap-2">
                            <HashtagIcon className="size-8 text-gray-400" />
                            <b className="text-2xl">{donation?.id}</b>
                        </p>
                        <p className="text-sm md:text-xl flex flex-col justify-center items-center gap-2">
                            <CurrencyBangladeshiIcon className="size-8 text-gray-400" />
                            <b className="text-2xl">{donation?.amount} BDT</b>
                        </p>
                        <p className="text-sm md:text-xl flex flex-col justify-center items-center gap-2">
                            <CalendarIcon className="size-8 text-gray-400" />
                            <b className="text-2xl">
                                {new Date(
                                    donation?.createdAt
                                ).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                })}
                            </b>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/dashboard/donations"
                            className="px-8 py-2 border border-brand text-brand hover:text-white hover:bg-brand rounded-lg"
                        >
                            &larr; Back to Donation List
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
