import AccessDenied from '@/components/AccessDenied';
import DonationDeleteButton from '@/components/actions/DonationDeleteButton';
import DonationEditButton from '@/components/actions/DonationEditButton';
import { fetchAuthUser } from '@/services/auth';
import { fetchAllDonations } from '@/services/donations';
import Link from 'next/link';

export default async function DonationPage() {
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
                            Donation List
                        </h1>
                        <div className="flex gap-4 justify-end">
                            <Link
                                href="/dashboard/reports"
                                className="text-brand underline underline-offset-2"
                            >
                                Reports &rarr;
                            </Link>
                            <Link
                                href="/dashboard/trashes"
                                className="text-brand underline underline-offset-2"
                            >
                                Trashes &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max bg-white text-xs md:text-base">
                            <thead>
                                <tr>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        ID
                                    </th>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        Amount
                                    </th>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        Name
                                    </th>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        Email
                                    </th>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        Date
                                    </th>
                                    <th className="py-2 md:py-4 px-2 md:px-4 border-b">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations?.length > 0 &&
                                    donations.map((donation) => (
                                        <tr key={donation.id}>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                {donation.id}
                                            </td>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                {donation.amount} BDT
                                            </td>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                {donation.name}
                                            </td>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                {donation.email}
                                            </td>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                {new Date(
                                                    donation.createdAt
                                                ).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </td>
                                            <td className="py-2 md:py-4 px-2 md:px-4 border-b text-center">
                                                <div className="flex gap-1 justify-center items-center">
                                                    <Link
                                                        href={`/dashboard/donations/${donation.id}`}
                                                        className="text-brand"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                            />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                            />
                                                        </svg>
                                                    </Link>
                                                    <DonationEditButton
                                                        donation={donation}
                                                    />
                                                    <DonationDeleteButton
                                                        id={donation.id}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
