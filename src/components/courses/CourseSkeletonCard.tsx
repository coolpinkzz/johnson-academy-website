export default function CourseSkeletonCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
      <div className="aspect-[4/3] animate-pulse bg-white/10" />
      <div className="space-y-3 p-5 sm:p-6">
        <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="h-4 animate-pulse rounded bg-white/10" />
          <div className="h-4 animate-pulse rounded bg-white/10" />
          <div className="h-4 animate-pulse rounded bg-white/10" />
          <div className="h-4 animate-pulse rounded bg-white/10" />
        </div>
        <div className="h-10 animate-pulse rounded-lg bg-white/10" />
      </div>
    </div>
  );
}
