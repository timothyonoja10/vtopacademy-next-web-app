
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <SchoolsLoadingSkeleton />
}

function SchoolsLoadingSkeleton() {
  return <h1>Loading Schools...</h1>
}