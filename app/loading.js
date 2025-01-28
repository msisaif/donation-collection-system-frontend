export default function Loading() {
    return (
        <>
            <div className="container p-4">
                <div className="max-w-2xl mx-auto grid gap-4 opacity-30">
                    <div className="rounded-lg border border-brand animate-pulse p-8 space-y-8">
                        <div className="space-y-4">
                            <div className="mx-auto h-7 w-40 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="mx-auto h-3 w-[70%] rounded-lg border bg-brand animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-3 w-28 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="h-10 w-[100%] rounded-lg border border-brand animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-3 w-28 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="h-10 w-[100%] rounded-lg border border-brand animate-pulse"></div>
                        </div>
                        <div className="h-10 w-[100%] rounded-lg border bg-brand animate-pulse"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
