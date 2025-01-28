import TableSkeleton from "@/components/skeletons/TableSkeleton";

export default function Loading() {
    return (
        <>
            <div className="container p-4">
                <div className="grid gap-4 opacity-30">
                    <div className="rounded-lg border border-brand animate-pulse p-8 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-7 w-40 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="ml-auto h-3 w-24 rounded-lg border bg-brand animate-pulse"></div>
                            <div className="h-3 w-24 rounded-lg border bg-brand animate-pulse"></div>
                        </div>
                        <TableSkeleton />
                    </div>
                </div>
            </div>
        </>
    );
}
