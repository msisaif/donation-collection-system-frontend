import AccessDenied from '@/components/AccessDenied';
import DonationRestoreButton from '@/components/actions/DonationRestoreButton';
import { fetchAuthUser } from '@/services/auth';
import { fetchAllTrashDonations } from '@/services/donations';
import Link from 'next/link';

export default async function TrashPage() {
    const authUser = await fetchAuthUser();

    if (!authUser) {
        return <AccessDenied />;
    }

    const donations = await fetchAllTrashDonations();

    return (
        <>
            <section className="container mx-auto p-4">
                <div className="w-full bg-white rounded-lg border p-6 md:p-8">
                    <div className="px-4 mb-8 flex gap-y-4 flex-col md:flex-row md:justify-between md:items-center">
                        <h1 className="md:text-center text-2xl font-bold text-gray-900">
                            Trash List
                        </h1>
                        <div className="flex gap-4 justify-end">
                            <Link
                                href="/dashboard/donations"
                                className="text-brand underline underline-offset-2"
                            >
                                Donations &rarr;
                            </Link>
                            <Link
                                href="/dashboard/reports"
                                className="text-brand underline underline-offset-2"
                            >
                                Reports &rarr;
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
                                                    <DonationRestoreButton
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
