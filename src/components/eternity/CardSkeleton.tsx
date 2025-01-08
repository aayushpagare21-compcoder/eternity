"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CategoryCardSkeleton = () => (
  <div className="keen-slider__slide px-2">
    <Card className="overflow-hidden bg-zinc-900/50 border-zinc-800">
      <CardContent className="p-0 relative aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 animate-pulse" />
        <div className="absolute bottom-0 left-0 p-4 space-y-2 w-full">
          <Skeleton className="h-6 w-24 bg-zinc-800/50" />
          <Skeleton className="h-4 w-20 bg-zinc-800/50" />
        </div>
      </CardContent>
    </Card>
  </div>
);
