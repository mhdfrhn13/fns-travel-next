export const SkeletonCard = () => <div className="w-full h-64 skeleton"></div>;

export const SkeletonBento = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
    <div className="md:col-span-2 md:row-span-2 skeleton"></div>
    <div className="md:col-span-2 md:row-span-1 skeleton"></div>
    <div className="md:col-span-1 md:row-span-1 skeleton"></div>
    <div className="md:col-span-1 md:row-span-1 skeleton"></div>
  </div>
);
