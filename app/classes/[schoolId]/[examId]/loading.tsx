
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <ClassesLoadingSkeleton />
}
  
function ClassesLoadingSkeleton() {
  return <h1>Loading Classes...</h1>
}