'use client';

import { restoreDonationById } from '@/services/donations';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

function DonationRestoreButton({ id }) {
    const handleRestoreClick = async () => {
        const confirmRestore = window.confirm(
            'Are you sure you want to restore this donation?'
        );

        if (confirmRestore) {
            const isRestored = await restoreDonationById(id);

            if (isRestored) {
                // Refresh the page
                window.location.reload();
            } else {
                alert('Failed to restore donation!');
            }
        }
    };

    return (
        <>
            <button
                type="button"
                className="text-red-700 ml-2"
                onClick={handleRestoreClick}
            >
                <ArrowPathIcon className="size-6" />
            </button>
        </>
    );
}

export default DonationRestoreButton;
