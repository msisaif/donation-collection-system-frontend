import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const notoSansBengali = Noto_Sans_Bengali({
    variable: '--font-noto-sans-bengali',
    subsets: ['bengali'],
    weight: ['400', '700'],
});

export const metadata = {
    title: 'Donation Collection System',
    description: 'Donation Collection System',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${notoSansBengali.variable} antialiased min-h-screen flex flex-col justify-between`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
