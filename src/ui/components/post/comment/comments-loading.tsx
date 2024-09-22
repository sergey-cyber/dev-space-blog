import { Skeleton } from "@/ui/shadcn/ui/skeleton";

export function CommentsLoading() {
  return (
    <div className="container space-y-4 py-4">
      <Skeleton className="h-10 w-48" />
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex gap-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="w-full h-28" />
        </div>
      </div>
      <div className="flex gap-x-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="w-full h-28" />
      </div>
    </div>
  );
}
