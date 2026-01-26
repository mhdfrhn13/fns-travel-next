import { SkeletonBento, SkeletonCard } from "@/components/UI/Skeleton";

export default function Loading() {
  return (
    <main className="bg-bg-soft min-h-screen">
      {/* 1. Placeholder untuk Hero (Visual saja) */}
      <div className="relative h-screen w-full bg-gray-200 skeleton"></div>

      <div className="max-w-[1200px] mx-auto px-4 py-20">
        {/* 2. Placeholder untuk Gallery (Bento) */}
        <div className="mb-20">
          <div className="h-10 w-64 skeleton mb-8 mx-auto"></div>
          <SkeletonBento />
        </div>

        {/* 3. Placeholder untuk Packages (Grid) */}
        <div>
          <div className="h-10 w-48 skeleton mb-8 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    </main>
  );
}
