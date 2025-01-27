'use server';

import { cookies } from 'next/headers';

export async function fetchAllDonations() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}

export async function fetchAllTrashDonations() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}

export async function fetchDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id) {
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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}

export async function updateDonationById(id, data) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id || !data) {
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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}

export async function deleteDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id) {
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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}

export async function restoreDonationById(id) {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!id) {
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
            return null;
        }

        return await res.json();
    } catch {
        return null;
    }
}
