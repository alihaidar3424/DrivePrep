import { PageContainer } from "@/components/ui/PageContainer";
import { Skeleton } from "@/components/ui/Skeleton";

type RouteLoadingProps = {
  withBottomNav?: boolean;
  variant?: "default" | "form" | "quiz" | "article";
};

export function RouteLoading({ withBottomNav = false, variant = "default" }: RouteLoadingProps) {
  return (
    <PageContainer withBottomNav={withBottomNav} className="page-stack" aria-busy aria-label="Loading">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/2" />

      {variant === "form" ? (
        <>
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-14 w-full rounded-xl" />
        </>
      ) : null}

      {variant === "quiz" ? (
        <>
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 20 }, (_, index) => (
              <Skeleton key={index} className="h-9 w-9 rounded-lg" />
            ))}
          </div>
          <Skeleton className="h-24 w-full rounded-xl" />
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-14 w-full rounded-xl" />
          ))}
          <div className="flex gap-3">
            <Skeleton className="h-11 flex-1 rounded-xl" />
            <Skeleton className="h-11 flex-1 rounded-xl" />
          </div>
        </>
      ) : null}

      {variant === "article" ? (
        <>
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-11 flex-1 rounded-xl" />
            <Skeleton className="h-11 flex-1 rounded-xl" />
          </div>
        </>
      ) : null}

      {variant === "default" ? (
        <>
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </>
      ) : null}
    </PageContainer>
  );
}
