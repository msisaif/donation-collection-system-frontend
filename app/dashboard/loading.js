export default function Loading() {
    return (
        <>
            <div className="container p-4">
                <div className="grid md:grid-cols-3 gap-4 opacity-30">
                    <div className="rounded-lg border border-brand animate-pulse">
                        <div className="px-4 py-8 space-y-4">
                            <div className="mx-auto h-12 w-12 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="mx-auto h-4 w-[60%] rounded-lg border bg-brand animate-pulse"></div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-brand animate-pulse">
                        <div className="px-4 py-8 space-y-4">
                            <div className="mx-auto h-12 w-12 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="mx-auto h-4 w-[60%] rounded-lg border bg-brand animate-pulse"></div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-brand animate-pulse">
                        <div className="px-4 py-8 space-y-4">
                            <div className="mx-auto h-12 w-12 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="mx-auto h-4 w-[60%] rounded-lg border bg-brand animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
