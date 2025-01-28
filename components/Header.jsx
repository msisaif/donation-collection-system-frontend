import Link from 'next/link';
import DashboardOrLogin from './DashboardOrLogin';

async function Header() {
    return (
        <>
            <header className="bg-white text-white sticky top-0 z-50 border-b">
                <div className="container p-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="uppercase text-brand px-1 flex flex-col items-center"
                    >
                        <span className="text-[16px] md:text-[20px] font-bold border-b border-brand">
                            Donation
                        </span>
                        <span className="text-[9px] md:text-[11.25px]">
                            Collection System
                        </span>
                    </Link>
                    <div className="flex items-center text-black">
                        <DashboardOrLogin />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
