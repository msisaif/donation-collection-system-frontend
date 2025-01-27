'use client';

import { deleteDonationById } from '@/services/donations';

import { TrashIcon } from '@heroicons/react/24/outline';

function DonationDeleteButton({ id }) {
    const handleDeleteClick = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this donation?'
        );

        if (confirmDelete) {
            const isDeleted = await deleteDonationById(id);

            if (isDeleted) {
                // Refresh the page
                window.location.reload();
            } else {
                alert('Failed to delete donation!');
            }
        }
    };

    return (
        <>
            <button
                type="button"
                className="text-red-700 ml-2"
                onClick={handleDeleteClick}
            >
                <TrashIcon className="size-6" />
            </button>
        </>
    );
}

export default DonationDeleteButton;
