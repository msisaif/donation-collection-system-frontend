'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 16px',
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    border: '1px solid #cccc',
                    padding: '32px 8px',
                    background: '#fff',
                    borderRadius: '8px',
                    minWidth: '320px',
                }}
            >
                <h1 style={{ fontSize: '24px', color: '#f20' }}>Something went wrong!</h1>
                <br />
                <button
                    type="button"
                    style={{
                        border: '1px solid #cccc',
                        padding: '8px 32px',
                        background: '#456',
                        borderRadius: '8px',
                        color: '#fff',
                    }}
                    onClick={() => reset()}
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
