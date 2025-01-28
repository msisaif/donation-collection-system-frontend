'use server';

import { cookies } from 'next/headers';

export async function fetchAllDonations() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!token) {
        console.error('Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to fetch all donations:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in fetchAllDonations:', error);
        return null;
    }
}

export async function fetchAllTrashDonations() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!token) {
        console.error('Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations/trash`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to fetch trash donations:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in fetchAllTrashDonations:', error);
        return null;
    }
}

export async function fetchDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id || !token) {
        console.error('ID or Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to fetch donation by id:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in fetchDonationById:', error);
        return null;
    }
}

export async function updateDonationById(id, data) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id || !data || !token) {
        console.error('ID, Data or Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations/${id}`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to update donation:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in updateDonationById:', error);
        return null;
    }
}

export async function deleteDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id || !token) {
        console.error('ID or Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to delete donation:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in deleteDonationById:', error);
        return null;
    }
}

export async function restoreDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id || !token) {
        console.error('ID or Token is missing');
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/donations/${id}/restore`,
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: 'no-store',
            }
        );

        if (!res.ok) {
            console.error('Failed to restore donation:', res.statusText);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error in restoreDonationById:', error);
        return null;
    }
}
