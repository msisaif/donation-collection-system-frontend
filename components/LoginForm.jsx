'use client';

import { useState } from 'react';

function LoginForm() {
    const [data, setData] = useState({
        email: 'admin@gmail.com', // for checking 
        password: '123456', // for checking 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh on submit
        setIsSubmitting(true);
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_ROOT}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Set the access_token cookie
            const { access_token } = await response.json();
            document.cookie = `access_token=${access_token}; path=/`;
            setSubmitSuccess(true);
            // Redirect to the dashboard
            window.location.href = '/dashboard';
        } catch (error) {
            console.log(error);

            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDataChange = (e, item) => {
        setData({
            ...data,
            [item]: e.target.value,
        });
    };

    return (
        <>
            <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6 md:p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Login</h1>
                </div>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    className="block w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="example@gmail.com"
                                    onInput={(e) =>
                                        handleDataChange(e, 'email')
                                    }
                                    value={data.email}
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    className="block w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="*****"
                                    onInput={(e) =>
                                        handleDataChange(e, 'password')
                                    }
                                    value={data.password}
                                    required
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>
                    </div>

                    {submitSuccess && (
                        <div className="rounded-lg bg-green-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-green-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800">
                                        Login successful!
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {submitError && (
                        <div className="rounded-lg bg-red-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-red-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-red-800">
                                        An error occurred while logging in...
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Actions */}
                    <div className="flex items-center justify-end space-x-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-brand rounded-lg text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Processing...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
