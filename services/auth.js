import { cookies } from 'next/headers';

export async function fetchAuthUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/auth/user`,
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
