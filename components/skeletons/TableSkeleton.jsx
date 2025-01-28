export default function TableSkeleton() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div className="h-4 w-[6%] rounded-lg border bg-brand animate-pulse"></div>
                    <div className="h-4 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                    <div className="h-4 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                    <div className="h-4 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                    <div className="h-4 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                    <div className="h-4 w-[6%] rounded-lg border bg-brand animate-pulse"></div>
                </div>
                <hr className="border-brand" />
                <TableRowSkeleton />
                <hr className="border-brand" />
                <TableRowSkeleton />
                <hr className="border-brand" />
                <TableRowSkeleton />
                <hr className="border-brand" />
            </div>
        </>
    );
}

function TableRowSkeleton() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="h-2.5 w-[6%] rounded-lg border bg-brand animate-pulse"></div>
                <div className="h-2.5 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                <div className="h-2.5 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                <div className="h-2.5 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                <div className="h-2.5 w-[14%] rounded-lg border bg-brand animate-pulse"></div>
                <div className="h-2.5 w-[6%] rounded-lg border bg-brand animate-pulse"></div>
            </div>
        </>
    );
}
