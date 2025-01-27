function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="bg-gray-800 text-white mt-auto">
                <div className="container flex justify-center items-center py-4">
                    <p>© {year} All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
