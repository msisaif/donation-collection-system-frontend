'use client';

import { updateDonationById } from '@/services/donations';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function DonationEditButton({ donation }) {
    const [data, setData] = useState({
        amount: donation?.amount || '',
        name: donation?.name || '',
        email: donation?.email || '',
    });
    const [editMode, setEditMode] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        const response = await updateDonationById(donation?.id, data);

        setIsSubmitting(false);

        window.location.reload();
    };

    const handleDataChange = (item, value) => {
        setData({
            ...data,
            [item]: value,
        });
    };

    return (
        <>
            <button
                type="button"
                className="text-red-700 ml-2"
                onClick={() => setEditMode(true)}
            >
                <PencilSquareIcon className="size-6" />
            </button>

            {editMode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form
                        action={handleSubmit}
                        className="w-full max-w-2xl bg-white text-left rounded-lg p-4 grid grid-cols-1 gap-6"
                    >
                        <div>
                            <label
                                htmlFor="donorName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Donation Amount{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    className="block w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Amount in BDT"
                                    onInput={(e) =>
                                        handleDataChange(
                                            'amount',
                                            Number(e.target.value)
                                        )
                                    }
                                    value={data.amount}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="donorName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    className="block w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Full Name"
                                    onInput={(e) =>
                                        handleDataChange('name', e.target.value)
                                    }
                                    value={data.name}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    className="block w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="example@gmail.com"
                                    onInput={(e) =>
                                        handleDataChange(
                                            'email',
                                            e.target.value
                                        )
                                    }
                                    value={data.email}
                                    required
                                />
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="flex items-center justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => setEditMode(false)}
                                className="w-full px-6 py-3 bg-gray-700 text-center rounded-lg text-sm font-medium text-white hover:opacity-90"
                            >
                                Cancel
                            </button>
                            {submitSuccess ? (
                                <button
                                    onClick={() => window.location.reload()}
                                    type="button"
                                    className="w-full px-6 py-3 bg-gray-700 text-center rounded-lg text-sm font-medium text-white hover:opacity-90"
                                >
                                    Reset
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-brand rounded-lg text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Processing...' : 'Update'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default DonationEditButton;
