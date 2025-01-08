import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const LoadingSkeleton = () => {
  return (
    <div className="h-[90vh] w-[100vw] relative overflow-hidden">
      {/* Content skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 space-y-8 mb-8">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900" />
          <div className="absolute -inset-[10px] bg-gradient-to-r from-transparent via-zinc-800/10 to-transparent blur-xl animate-pulse" />
        </div>
        {/* Genre badge */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 bg-zinc-800/50 rounded-full" />
          <Skeleton className="h-6 w-24 bg-zinc-800/50 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <Skeleton className="h-12 md:h-16 w-3/4 bg-zinc-800/50" />
          <Skeleton className="h-12 md:h-16 w-1/2 bg-zinc-800/50" />
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-20 bg-zinc-800/50 rounded-full" />
          <Skeleton className="h-4 w-20 bg-zinc-800/50 rounded-full" />
          <Skeleton className="h-4 w-16 bg-zinc-800/50 rounded-full" />
        </div>
        {/* Description */}
        <div className="space-y-2 max-w-2xl">
          <Skeleton className="h-4 w-full bg-zinc-800/50" />
          <Skeleton className="h-4 w-5/6 bg-zinc-800/50" />
          <Skeleton className="h-4 w-4/6 bg-zinc-800/50" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Skeleton
            className={cn(
              "h-10 w-32 bg-red-500/20 rounded-full",
              "after:absolute after:inset-0",
              "after:bg-gradient-to-r after:from-transparent",
              "after:via-red-500/10 after:to-transparent",
              "after:animate-shimmer",
            )}
          />
          <Skeleton className="h-10 w-32 bg-zinc-800/50 rounded-full" />
        </div>
        <div className="flex justify-center  gap-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton
              key={i}
              className={cn(
                "h-1 w-12 rounded-full transition-all duration-300",
                i === 0 ? "bg-red-600/50" : "bg-zinc-800/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
