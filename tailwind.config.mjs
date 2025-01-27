/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                brand: 'var(--brand-color)',
            },
            container: {
                center: true,
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '1024px',
                    xl: '1024px',
                },
            },
        },
    },
    plugins: [],
};
